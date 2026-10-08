import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import filesImg from "@/assets/files.png";
import diskImg from "@/assets/disk.png";
import networkImg from "@/assets/network.png";
import systemImg from "@/assets/system.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShellSimple — Linux commands, explained simply" },
      {
        name: "description",
        content:
          "Type a Linux command like tail, ls or df and see what it does in plain words. Made for IT students new to Linux.",
      },
      { property: "og:title", content: "ShellSimple — Linux commands, explained simply" },
      {
        property: "og:description",
        content: "Type a Linux command and see what it does in one plain sentence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const COMMANDS: Record<string, string> = {
  ls: "Lists the files and folders inside the folder you are in.",
  cd: "Moves you into a different folder, like double-clicking a folder.",
  pwd: "Shows the full path of the folder you are in right now.",
  head: "Shows the first 10 lines of a file so you can peek at the start.",
  tail: "Shows the last 10 lines of a file, handy for reading the newest log entries.",
  cat: "Prints the whole contents of a file on the screen.",
  cp: "Makes a copy of a file or folder.",
  mv: "Moves a file to a new place, or renames it.",
  df: "Shows how much space is used and free on each of your disks.",
  du: "Shows how much disk space a file or folder takes up.",
  lsblk: "Lists the disks and partitions connected to your computer.",
  ifconfig: "Shows your network connections and their IP addresses.",
  ping: "Checks if another computer or website can be reached and how fast it replies.",
  curl: "Downloads or sends data to a web address straight from the terminal.",
  ssh: "Lets you log in to another computer over the network and control it.",
  whoami: "Prints the name of the user you are logged in as.",
  uname: "Shows basic information about your system, like the Linux kernel name and version.",
  htop: "Shows a live, colourful list of running programs and how much memory and CPU they use.",
  git: "Tracks changes to your code and lets you share it with others.",
  sudo: "Runs a command with administrator powers, after asking for your password.",
};

const GROUPS = [
  { name: "Files", img: filesImg, cmds: ["ls", "cd", "pwd", "head", "tail", "cat", "cp", "mv"] },
  { name: "Disk", img: diskImg, cmds: ["df", "du", "lsblk"] },
  { name: "Network", img: networkImg, cmds: ["ifconfig", "ping", "curl", "ssh"] },
  { name: "System", img: systemImg, cmds: ["whoami", "uname", "htop", "git", "sudo"] },
];

type Result = { kind: "empty" } | { kind: "found"; cmd: string } | { kind: "missing" };

function Index() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result>({ kind: "empty" });
  const answerRef = useRef<HTMLDivElement>(null);

  const lookup = (raw: string) => {
    const key = raw.trim().replace(/\s+/g, " ").toLowerCase();
    if (!key) return setResult({ kind: "empty" });
    setResult(COMMANDS[key] ? { kind: "found", cmd: key } : { kind: "missing" });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    lookup(query);
  };

  const pick = (cmd: string) => {
    setQuery(cmd);
    setResult({ kind: "found", cmd });
    answerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:pt-14">
        <p className="font-mono text-sm font-semibold text-primary">ShellSimple</p>

        <section className="mt-6 grid items-center gap-8 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Linux commands, explained simply.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Type a command like <code className="rounded bg-card px-1.5 py-0.5 font-mono text-foreground">tail</code> and see what it does in plain words.
            </p>
          </div>
          <img
            src={hero}
            alt="A friendly laptop with a terminal window open"
            width={1024}
            height={768}
            className="w-full rounded-2xl border border-border"
          />
        </section>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" role="search">
          <label htmlFor="cmd" className="sr-only">Command name</label>
          <input
            id="cmd"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: ls, cd, df, tail, whoami"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            className="h-14 flex-1 rounded-xl border border-border bg-background px-4 font-mono text-lg outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary px-7 text-lg font-bold text-primary-foreground hover:bg-primary/90"
          >
            Search
          </button>
        </form>

        <div
          ref={answerRef}
          aria-live="polite"
          className="mt-4 min-h-28 rounded-2xl border border-border bg-card p-5 sm:p-6"
        >
          {result.kind === "empty" && (
            <p className="text-muted-foreground">
              Your answer shows up here: what the command does, in one simple sentence.
            </p>
          )}
          {result.kind === "found" && (
            <>
              <p className="font-mono text-2xl font-semibold text-primary">{result.cmd}</p>
              <p className="mt-2 text-lg">{COMMANDS[result.cmd]}</p>
            </>
          )}
          {result.kind === "missing" && (
            <p className="text-lg">I don't know that one yet. Try ls, cd, df, tail or whoami.</p>
          )}
        </div>

        <section className="mt-14">
          <p className="text-lg text-muted-foreground">
            Not sure what to search? Browse by what you want to do: files, disk, network, or system.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {GROUPS.map((g) => (
              <div key={g.name} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <img src={g.img} alt="" width={48} height={48} loading="lazy" className="h-12 w-12" />
                  <h2 className="text-xl font-bold">{g.name}</h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.cmds.map((c) => (
                    <button
                      key={c}
                      onClick={() => pick(c)}
                      className="min-h-11 rounded-lg border border-border bg-background px-4 font-mono text-base hover:border-primary hover:text-primary"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 text-center text-muted-foreground">
        ShellSimple is a beginner project made at a KrackedDevs session. Built to make the terminal less scary.
      </footer>
    </div>
  );
}
