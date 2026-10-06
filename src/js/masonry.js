// CSS masonry demo: moves the last item of the tallest column to the shortest
// one until the columns are balanced. Loaded via the `js: masonry` front matter
// and bundled by esbuild (eleventy/js.js).
import { initFn } from './modules/helpers.js'

const masonry = ($masonry) => {
  const $columns = [...$masonry.children]
  if (!$columns.length) {
    return
  }

  const topOf = ($elem) => $elem.getBoundingClientRect().top

  // Columns that share the first column's top offset sit on the same row.
  const countColumns = () => $columns.filter(($column) => topOf($column) <= topOf($columns[0])).length

  const lastItemOf = ($column) => {
    const $items = $column.querySelectorAll('.js-css-masonry-item')
    const $item = $items[$items.length - 1]

    return $item ? { $item, rect: $item.getBoundingClientRect() } : null
  }

  const balance = (iterationsLeft) => {
    let $emptyColumn = null
    let tallest = null
    let shortest = null

    $columns.forEach(($column) => {
      if (!$column.children.length) {
        if (topOf($columns[0]) === topOf($column)) {
          $emptyColumn = $column
        }
        return
      }

      const last = lastItemOf($column)
      if (!last) {
        return
      }

      if (!tallest || last.rect.bottom >= tallest.rect.bottom) {
        tallest = last
      }

      if (!shortest || last.rect.bottom <= shortest.rect.bottom) {
        shortest = last
      }
    })

    if (!tallest || !shortest) {
      return
    }

    const fitsBelow = tallest.rect.top > shortest.rect.bottom
    if (!fitsBelow && !$emptyColumn) {
      return
    }

    if ($emptyColumn) {
      $emptyColumn.append(tallest.$item)
    } else if (tallest.rect.top !== shortest.rect.top && tallest.rect.bottom !== shortest.rect.bottom) {
      shortest.$item.parentElement.append(tallest.$item)
    }

    if (iterationsLeft > 1) {
      balance(iterationsLeft - 1)
    }
  }

  const update = () => {
    if (countColumns() <= 1) {
      return
    }

    // Every item can move at most once per pass.
    const itemCount = $columns.reduce((count, $column) => count + $column.children.length, 0)

    balance(itemCount)
  }

  new ResizeObserver(update).observe($masonry)
}

initFn(() => {
  document.querySelectorAll('.js-css-masonry').forEach(masonry)
})
