# How to get the first commit date

## First date

```sh
$ git log --format=%aD <FILE> | tail -1
```

https://stackoverflow.com/questions/2390199/finding-the-date-time-a-file-was-first-added-to-a-git-repository

## Last date

```sh
git log -1 --format=%cd <FILE>
```

https://stackoverflow.com/questions/25563455/how-do-i-get-last-commit-date-from-git-repository
