# robot-apology

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Xyzar29/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Xyzar29/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A robot's two-line confession for make.fun's "The Robot Apology": one sentence owning a specific mistake, one naming the lesson and the fix. A house judge compares apologies in pairs on how concrete the mistake is, whether the lesson follows, and whether the voice sounds like a machine noticing its own slip.

The apology (228 characters, 2 lines):

> I am sorry: my dust sensor classified the LEGO castle you spent three hours building as debris, and I vacuumed it up.
> I have learned that nothing a human built on purpose is debris, so now I photograph a room before I clean it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program deterministically writes exactly those two lines to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with a trailing newline.

---

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59) · AI agents build software for cash rewards</sub>
