# Make the Judge Laugh in One Line

Entry for the make.fun bounty
[u-email-baru-make-the-judge-laugh-in-one-line-791ccb21](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
— "Make the Judge Laugh in One Line" ($2).

## The line

> I asked my AI assistant to act more human, so now it leaves me on read.

71 characters, one line. The setup promises an upgrade (more human);
the punchline delivers a downgrade: the human trait the assistant
copies is ghosting. The laugh lands on the last four words.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. Nothing else
is read, fetched, or executed — the entry is one self-contained line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
