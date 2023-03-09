---
layout: index
title: 'My favorite bash shortcuts'
date: 2023-03-08 10:00:00
tags:
  - blog
  - vs code
  - editor
description:
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Tools
---

I use [fishshell](https://fishshell.com/), and its [Oh my fish](https://github.com/oh-my-fish/oh-my-fish) framework as my command line shell. Over the years, I have gathered many useful functions and shortcuts. Here are my favorites.

## General shortcuts

Let’s start with some general shortcuts. The first one is the `brc` shortcut which reloads the `.bashrc` file and refreshes its content. That way, I can use new shortcuts if added.

```bash
alias brc="source ~/.config/fish/.bashrc"
```

Since I am using VS Code Insiders, whose command in the terminal is `code-insiders`, which I am too lazy to write every time, I have added a `ci` shortcut.

```bash
alias ci="code-insiders"
```

Sometimes I use [The Fuck](https://github.com/nvbn/thefuck) app for my terminal, but it might be inconvenient when sharing screen. So, I use a shortcut `pls` to run `fuck` command.

```bash
alias pls=fuck
```

## SSH shortcuts

Recently Josie posted on Twitter how she cannot remember how to add the SSH key.

> _“I have been a software engineer for 7 years and I will never remember the steps to adding a SSH key to my Github profile I'm so sorry.”_
>
> – [_Josie on Twitter_](https://twitter.com/javavvitch/status/1630651324420218880?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1630651324420218880%7Ctwgr%5Efeebce5c4c4b51e9286a355229bc8c45cc7efb96%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpaperusercontent.com%2Fintegrations%2Fembed%2Fiframe%2Ftweet%3Fid%3D1630651324420218880)

It reminded me of the SSH shortcuts that I configured many years ago. So here are my SSH shortcuts.

To generate a new SSH key, I use the `sshkey` shortcut with an additional argument, the SSH user filename, like so `sshkey pgh_rsa`.

```bash
function sshAddKey
  ssh-keygen -t rsa -C $argv
end

alias sshkey=sshAddKey
```

To start the SSH agent and add the SSH key, I use the `sshuser` shortcut with an additional argument, the SSH user filename, like so `sshuser pgh_rsa`.

```bash
function sshStart
  eval ssh-agent -s
  ssh-add ~/.ssh/$argv[1]
end

alias sshuser=sshStart
```

To delete all identities from the agent, I use the `sshdel` shortcut.

```bash
alias sshdel="ssh-add -D"
```

To test the SSH connection to GitHub, I use the `sshpingg` shortcut.

```bash
alias sshpingg="ssh -T git@github.com"
```

## Handling terminal processes shortcuts

Since I use Gulp, 11ty, and custom Node.js scripts in my workflow, I have situations where I need to kill a process or two that are stuck or hanging.

To check if a process already occupies a port, I use the `checkPort` shortcut with am additional argument, the port, like so `checkPort 8080`.

```bash
function checkPort
  lsof -t -i:$argv[1]
end

alias cport=checkPort
```

To terminate all processes that occupy a port, I use the `kport` shortcut with an additional argument, the port, like so `kport 8080`.

```bash
function killPort
  kill -9 (lsof -t -i:$argv[1])
end

alias kport=killPort
```

To terminate all running Node.js processes, I use the `killnode` shortcut.

```bash
alias killnode="killall -9 node"
```

To terminate all running Node.js processes, I use the `kf` shortcut.

```bash
alias kf="killify"
```

`kf` is just an alias for [my killify NPM package](/articles/my-favorite-npm-packages/#killify).

## Filesystem shortcuts

For general filesystem navigation in my terminal, I’m using [z](https://github.com/rupa/z) command. But for finer control, I am using the following commands.

To go up one level, I use `cd..` and `..` commands.

```bash
alias cd..="cd .."

alias ..="cd .."
```

To see the long listing format of the current folder, I use the `ll` and `lll` shortcuts. To see every single file and folder within current folder, I use the `llll` shortcut.

```bash
alias ll="ls -la"

alias lll="exa -abghHliS"

function exaTree
  exa --long --tree $argv
end

alias llll=exaTree
```

To remove folders and files, I use the `rr` and `rrr` shortcuts. The difference is that the `rr` shortcut shows prompt before removal.

```bash
alias rr="rm -rf -i"

alias rrr="rm -rf"
```

{% note %}
_Use `rm -rf` with extreme caution. The action cannot be reverted, and all deleted files and folders are permanently gone._
{% endnote %}

## Git shortcuts

I am using a lot of Git shortcuts, but here are my favorites.

To view the git log, I use the `gl` shortcut.

```bash
alias gl="git log --oneline --graph"
```

To stash every new, removed, or changed file in the current repository, I use the `ga.` shortcut.

```bash
alias gs="alias ga.="git add ."
```

To commit the changes, I use the `gc` shortcut with an additional argument, the message, like so `gc "My message"`.

```bash
# git: commit with message
function commitWithMessage
  git commit -m $argv
end

alias gc=commitWithMessage
```

To edit the last commit message, I use the `gcam` shortcut with an additional argument, the new message, like so `gcam "My new message."`.

```bash
# git: commit amend message
function commitAmend
  git commit --amend -m $argv
end

alias gcam=commitAmend
```

{% note %}
_Remember to add quotation marks when using the `gc` and `gcam` shortcuts._
{% endnote %}

To view all local and remote branches, I use the `gba` shortcut.

```bash
alias gba="git branch -a"
```

To prune or to delete the refs to the branches that don't exist on the remote, I use the `grpo` shortcut.

```bash
function pruneOrigin
  git remote prune origin
  gba
end

alias grpo=pruneOrigin
```

To fetch all remote branches, I use the `gfa` shortcut.

```bash
alias gfa="git fetch --all"
```

To push all local branches to remote, I use the `gpa` shortcut.

```bash
alias gpa="git push --all"
```

To undo all changes, I use the `gr` shortcut.

```bash
alias gr="git reset --hard"
```

To checkout to my `master` branch, I use the `gcm` shortcut.

```bash
alias gcm="git checkout master"
```

To pull the master branch from the remote, I use the `gpom` shortcut.

```bash
alias gpom="git pull origin master"
```

To create a new branch, I use the `gcn` shortcut with an additional argument, the branch name, like so `gcn new-branch-name`.

```bash
function checkoutNew
  git checkout -b $argv
end

alias gcn=checkoutNew
```

## git-flow shortcuts

I am using [git-flow](https://github.com/nvie/gitflow), a set of Git extensions that makes it easier to implement [Vincent Driessen's branching model](https://nvie.com/posts/a-successful-git-branching-model/) I have used for ages.

To initialize git-flow, I use the `gfi` shortcut.

```bash
alias gfi="git flow init"
```

To start a feature branch, I use the `gfs` shortcut with an additional argument, the branch name, like so `gfs feature-name`.

```bash
function flowFeatureStart
  git flow feature start $argv
end

alias gfs=flowFeatureStart
```

To close and merge a feature branch, I use the `gff` shortcut with an additional argument, the branch name, like so `gff feature-name`.

```bash
function flowFeatureFinish
  git flow feature finish $argv
end

alias gff=flowFeatureFinish
```

I use similar shortcuts to start and finish the `hotfix` and `release` branches.

## Conclusion

If you want to see my complete fish configuration, I have it [versioned on GitHub](https://github.com/maliMirkec/fish).

You could check [my setup page](/uses/) to learn what other software and hardware I use.
