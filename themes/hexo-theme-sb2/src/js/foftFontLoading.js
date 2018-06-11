/**
 * A better font loading using FontFaceObserver.
 *
 * @module CriticalFOFT
 * @author Zach Leatherman
 * @see https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft
 */

/**
 * @constructor
 * @author Zach Leatherman
 * @see https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft
 */
let FontFaceObserver;

// =include fontfaceobserver/fontfaceobserver.js

/**
 * @function
 * @name Anonymous self-invoked function
 * @description Adds classes to document when each font loads successfully.
 * If fonts are already loaded, then skip loading.
 */
(function () {
  console.log(window.sessionStorage.criticalFoftDataUriFontsLoaded1)

  if (window.sessionStorage.criticalFoftDataUriFontsLoaded1) {
    document.documentElement.className += ' fonts-stage-1 fonts-stage-2'
    return
  }

  /**
   * A subset of default font type.
   *
   * @const
   * @name fontASubset
   * @type {Object}
   */
  const fontASubset1 = new FontFaceObserver('Barlow Subset', {
    weight: 300,
    style: 'normal'
  })

  const fontASubset2 = new FontFaceObserver('Barlow Subset', {
    weight: 300,
    style: 'italic'
  })

  const fontASubset3 = new FontFaceObserver('Barlow Subset', {
    weight: 'bold',
    style: 'normal'
  })

  const fontASubset4 = new FontFaceObserver('Barlow Subset', {
    weight: 'bold',
    style: 'italic'
  })

  const fontBSubset = new FontFaceObserver('Playfair Display Subset', {
    weight: 'bold',
    style: 'normal'
  })

  /**
   * A promise that adds 'fonts-stage-1' if {@link fontASubset}
   * is loaded successfully.
   *
   * @method
   * @name Promise
   */
  Promise.all([
    fontASubset1.load(),
    fontASubset2.load(),
    fontASubset3.load(),
    fontASubset4.load(),
    fontBSubset.load()
  ]).then(() => {
    document.documentElement.className += ' fonts-stage-1'

    /**
     * Default font type.
     *
     * @const
     * @name fontA
     * @type {Object}
     */
    const fontA1 = new FontFaceObserver('Barlow', {
      weight: 300,
      style: 'normal'
    })

    const fontA2 = new FontFaceObserver('Barlow', {
      weight: 300,
      style: 'italic'
    })

    const fontA3 = new FontFaceObserver('Barlow', {
      weight: 'bold',
      style: 'normal'
    })

    const fontA4 = new FontFaceObserver('Barlow', {
      weight: 'bold',
      style: 'italic'
    })

    const fontB = new FontFaceObserver('Playfair Display', {
      weight: 'bold',
      style: 'normal'
    })

    console.log(`Subset fonts loaded.`)

    /**
     * A promise that adds 'fonts-stage-2' if
     * {@link fontA}
     * are loaded successfully.
     * Also, set Critical FOFT session variable to true.
     *
     * @method
     * @name Promise
     */
    Promise.all([
      fontA1.load(),
      fontA2.load(),
      fontA3.load(),
      fontA4.load(),
      fontB.load()
    ]).then(() => {
      document.documentElement.className += ' fonts-stage-2'

      // Optimization for Repeat Views
      window.sessionStorage.criticalFoftDataUriFontsLoaded1 = true

      console.log(`Main fonts loaded.`)
    }, () => {
      console.log(`Main fonts not loaded.`)
    })
  }, () => {
    console.log(`Subset fonts not loaded.`)
  })
})()
