export type CommandInfo = {
  description: string;
  flags: { flag: string; meaning: string }[];
};

export const COMMANDS: Record<string, CommandInfo> = {
  // Files & folders
  ls: { description: "Lists the files and folders inside the folder you are in.", flags: [
    { flag: "-l", meaning: "Long list: shows size, owner and date for each file" },
    { flag: "-a", meaning: "Also shows hidden files (the ones starting with a dot)" },
    { flag: "-h", meaning: "Shows sizes in human-friendly units like 4K or 2M" },
  ] },
  cd: { description: "Moves you into a different folder, like double-clicking a folder.", flags: [
    { flag: "..", meaning: "Goes up one folder" },
    { flag: "~", meaning: "Goes straight to your home folder" },
    { flag: "-", meaning: "Goes back to the folder you were in before" },
  ] },
  pwd: { description: "Shows the full path of the folder you are in right now.", flags: [
    { flag: "-P", meaning: "Shows the real path, resolving any shortcuts (symlinks)" },
  ] },
  head: { description: "Shows the first 10 lines of a file so you can peek at the start.", flags: [
    { flag: "-n 20", meaning: "Shows the first 20 lines instead of 10" },
    { flag: "-c 100", meaning: "Shows the first 100 bytes of the file" },
  ] },
  tail: { description: "Shows the last 10 lines of a file, handy for reading the newest log entries.", flags: [
    { flag: "-n 50", meaning: "Shows the last 50 lines instead of 10" },
    { flag: "-f", meaning: "Follows the file: new lines appear live as they are written" },
  ] },
  cat: { description: "Prints the whole contents of a file on the screen.", flags: [
    { flag: "-n", meaning: "Adds line numbers in front of every line" },
    { flag: "-A", meaning: "Shows hidden characters like tabs and line endings" },
  ] },
  cp: { description: "Makes a copy of a file or folder.", flags: [
    { flag: "-r", meaning: "Copies a whole folder and everything inside it" },
    { flag: "-i", meaning: "Asks before overwriting an existing file" },
    { flag: "-v", meaning: "Shows each file as it is copied" },
  ] },
  mv: { description: "Moves a file to a new place, or renames it.", flags: [
    { flag: "-i", meaning: "Asks before overwriting an existing file" },
    { flag: "-v", meaning: "Shows each file as it is moved" },
  ] },
  rm: { description: "Deletes files or folders. There is no recycle bin, so be careful.", flags: [
    { flag: "-r", meaning: "Deletes a folder and everything inside it" },
    { flag: "-i", meaning: "Asks before every single deletion" },
    { flag: "-f", meaning: "Deletes without asking or complaining" },
  ] },
  mkdir: { description: "Creates a new folder.", flags: [
    { flag: "-p", meaning: "Creates parent folders too, like a/b/c in one go" },
    { flag: "-v", meaning: "Prints a message for each folder created" },
  ] },
  rmdir: { description: "Deletes a folder, but only if it is completely empty.", flags: [
    { flag: "-p", meaning: "Also removes the empty parent folders" },
  ] },
  touch: { description: "Creates a new empty file, or updates the date on an existing one.", flags: [
    { flag: "-d", meaning: "Sets a specific date on the file, like -d \"2026-01-01\"" },
  ] },
  find: { description: "Searches for files and folders by name, size, date and more.", flags: [
    { flag: "-name", meaning: "Finds files whose name matches a pattern, like -name \"*.txt\"" },
    { flag: "-type d", meaning: "Finds only folders (use f for files)" },
    { flag: "-size +100M", meaning: "Finds files bigger than 100 megabytes" },
  ] },
  locate: { description: "Finds files super fast using a pre-built index of your disk.", flags: [
    { flag: "-i", meaning: "Ignores upper/lowercase when matching" },
    { flag: "-c", meaning: "Only counts how many matches there are" },
  ] },
  which: { description: "Shows where a program is installed on your system.", flags: [
    { flag: "-a", meaning: "Shows all matching locations, not just the first" },
  ] },
  file: { description: "Tells you what kind of file something really is, ignoring its extension.", flags: [
    { flag: "-b", meaning: "Shows just the type, without the file name" },
  ] },
  ln: { description: "Creates a link (shortcut) from one file to another.", flags: [
    { flag: "-s", meaning: "Makes a soft link, like a Windows shortcut" },
    { flag: "-f", meaning: "Replaces the link if it already exists" },
  ] },
  chmod: { description: "Changes who can read, write or run a file.", flags: [
    { flag: "+x", meaning: "Makes a file runnable as a program" },
    { flag: "755", meaning: "Owner can do everything, others can read and run" },
    { flag: "-R", meaning: "Applies the change to a folder and everything inside" },
  ] },
  chown: { description: "Changes which user and group own a file.", flags: [
    { flag: "-R", meaning: "Changes ownership for a folder and everything inside" },
  ] },
  wc: { description: "Counts lines, words and characters in a file.", flags: [
    { flag: "-l", meaning: "Counts only the lines" },
    { flag: "-w", meaning: "Counts only the words" },
    { flag: "-c", meaning: "Counts only the bytes" },
  ] },
  sort: { description: "Sorts the lines of a file alphabetically or numerically.", flags: [
    { flag: "-n", meaning: "Sorts by number instead of alphabetically" },
    { flag: "-r", meaning: "Reverses the order, biggest or Z first" },
    { flag: "-u", meaning: "Removes duplicate lines while sorting" },
  ] },
  uniq: { description: "Removes or reports repeated lines that sit next to each other.", flags: [
    { flag: "-c", meaning: "Shows how many times each line was repeated" },
    { flag: "-d", meaning: "Shows only the lines that were repeated" },
  ] },
  diff: { description: "Shows the differences between two files, line by line.", flags: [
    { flag: "-u", meaning: "Shows differences in the unified format used by git" },
    { flag: "-y", meaning: "Shows the two files side by side" },
  ] },
  grep: { description: "Searches inside files for lines that contain a word or pattern.", flags: [
    { flag: "-i", meaning: "Ignores upper/lowercase" },
    { flag: "-r", meaning: "Searches through a whole folder and its subfolders" },
    { flag: "-n", meaning: "Shows the line number of each match" },
    { flag: "-v", meaning: "Shows the lines that do NOT match" },
  ] },
  sed: { description: "Finds and replaces text inside files, straight from the terminal.", flags: [
    { flag: "'s/old/new/'", meaning: "Replaces \"old\" with \"new\" on each line" },
    { flag: "-i", meaning: "Edits the file in place instead of just printing" },
  ] },
  awk: { description: "Cuts and processes text column by column, great for tables and logs.", flags: [
    { flag: "'{print $1}'", meaning: "Prints only the first column of each line" },
    { flag: "-F:", meaning: "Uses a colon instead of spaces to split columns" },
  ] },
  cut: { description: "Cuts out selected columns or characters from each line.", flags: [
    { flag: "-d:", meaning: "Uses a colon as the column separator" },
    { flag: "-f1", meaning: "Keeps only the first column" },
  ] },
  tr: { description: "Translates or deletes characters, like turning lowercase into uppercase.", flags: [
    { flag: "'a-z' 'A-Z'", meaning: "Converts lowercase letters to uppercase" },
    { flag: "-d", meaning: "Deletes the given characters" },
  ] },
  less: { description: "Opens a file one screen at a time so you can scroll through it calmly.", flags: [
    { flag: "-N", meaning: "Shows line numbers" },
    { flag: "-S", meaning: "Cuts long lines instead of wrapping them" },
  ] },
  more: { description: "Shows a file one screen at a time, the older simpler cousin of less.", flags: [
    { flag: "-d", meaning: "Shows helpful hints at the bottom of each page" },
  ] },
  tee: { description: "Sends output to the screen AND into a file at the same time.", flags: [
    { flag: "-a", meaning: "Adds to the end of the file instead of overwriting it" },
  ] },
  xargs: { description: "Takes a list from one command and feeds it as arguments to another.", flags: [
    { flag: "-n 1", meaning: "Runs the command once per item" },
    { flag: "-0", meaning: "Handles file names that contain spaces safely" },
  ] },
  tree: { description: "Draws your folders and files as a nice tree diagram.", flags: [
    { flag: "-L 2", meaning: "Only shows 2 levels deep" },
    { flag: "-d", meaning: "Shows only folders, no files" },
  ] },
  stat: { description: "Shows detailed facts about a file: size, dates, permissions.", flags: [
    { flag: "-c %s", meaning: "Prints only the file size in bytes" },
  ] },
  basename: { description: "Strips the folder path and leaves just the file name.", flags: [
    { flag: ".txt", meaning: "Also removes that extension from the end" },
  ] },
  dirname: { description: "Strips the file name and leaves just the folder path.", flags: [] },
  realpath: { description: "Shows the full, real location of a file, resolving all shortcuts.", flags: [] },
  split: { description: "Splits a big file into smaller pieces.", flags: [
    { flag: "-l 1000", meaning: "Splits every 1000 lines" },
    { flag: "-b 10M", meaning: "Splits every 10 megabytes" },
  ] },
  shred: { description: "Deletes a file securely by overwriting it with random data first.", flags: [
    { flag: "-u", meaning: "Removes the file after overwriting it" },
    { flag: "-n 3", meaning: "Overwrites the file 3 times" },
  ] },

  // Disk & storage
  df: { description: "Shows how much space is used and free on each of your disks.", flags: [
    { flag: "-h", meaning: "Shows sizes in human-friendly units like G and M" },
    { flag: "-T", meaning: "Also shows the filesystem type of each disk" },
  ] },
  du: { description: "Shows how much disk space a file or folder takes up.", flags: [
    { flag: "-h", meaning: "Human-friendly sizes like 4K or 2G" },
    { flag: "-s", meaning: "Shows only one total per folder, not every subfolder" },
    { flag: "--max-depth=1", meaning: "Shows sizes of subfolders but no deeper" },
  ] },
  lsblk: { description: "Lists the disks and partitions connected to your computer.", flags: [
    { flag: "-f", meaning: "Also shows the filesystem type and labels" },
    { flag: "-a", meaning: "Shows empty devices too" },
  ] },
  mount: { description: "Attaches a disk or USB drive so you can use its files.", flags: [
    { flag: "-t", meaning: "Says which filesystem type to use, like -t ext4" },
    { flag: "-o ro", meaning: "Mounts read-only so nothing can be changed" },
  ] },
  umount: { description: "Detaches a disk safely before you unplug it.", flags: [
    { flag: "-l", meaning: "Lazy unmount: detaches when the disk stops being busy" },
  ] },
  fdisk: { description: "Views and edits the partition table of a disk. Use with care.", flags: [
    { flag: "-l", meaning: "Lists partitions on all disks without changing anything" },
  ] },
  mkfs: { description: "Formats a partition with a new filesystem, erasing what was there.", flags: [
    { flag: "-t ext4", meaning: "Formats with the ext4 filesystem" },
  ] },
  fsck: { description: "Checks a disk for filesystem errors and can repair them.", flags: [
    { flag: "-y", meaning: "Answers yes to all repair questions" },
    { flag: "-n", meaning: "Only checks, repairs nothing (safe dry run)" },
  ] },
  dd: { description: "Copies raw data between disks and files, byte by byte. Very powerful, very dangerous.", flags: [
    { flag: "if=", meaning: "Input file or disk to read from" },
    { flag: "of=", meaning: "Output file or disk to write to" },
    { flag: "status=progress", meaning: "Shows a live progress bar" },
  ] },
  sync: { description: "Forces all pending writes to be saved to disk right now.", flags: [] },
  free: { description: "Shows how much memory (RAM) is used and free.", flags: [
    { flag: "-h", meaning: "Human-friendly sizes like 2.0G" },
    { flag: "-s 2", meaning: "Refreshes every 2 seconds" },
  ] },
  lsusb: { description: "Lists the USB devices plugged into your computer.", flags: [
    { flag: "-v", meaning: "Shows very detailed information about each device" },
  ] },
  lspci: { description: "Lists the PCI devices in your computer, like graphics and network cards.", flags: [
    { flag: "-v", meaning: "Shows more detail about each device" },
  ] },

  // Network
  ifconfig: { description: "Shows your network connections and their IP addresses. Older but common.", flags: [
    { flag: "-a", meaning: "Shows all connections, even inactive ones" },
  ] },
  ip: { description: "The modern tool for viewing and changing network settings.", flags: [
    { flag: "addr", meaning: "Shows your IP addresses" },
    { flag: "link", meaning: "Shows your network cards" },
    { flag: "route", meaning: "Shows where your traffic is sent" },
  ] },
  ping: { description: "Checks if another computer or website can be reached and how fast it replies.", flags: [
    { flag: "-c 4", meaning: "Sends only 4 pings then stops" },
    { flag: "-i 0.5", meaning: "Pings twice per second" },
  ] },
  curl: { description: "Downloads or sends data to a web address straight from the terminal.", flags: [
    { flag: "-O", meaning: "Saves the download with its original file name" },
    { flag: "-L", meaning: "Follows redirects to the final address" },
    { flag: "-I", meaning: "Fetches only the headers, not the content" },
  ] },
  wget: { description: "Downloads files from the web, good for big or repeated downloads.", flags: [
    { flag: "-c", meaning: "Continues an interrupted download" },
    { flag: "-q", meaning: "Quiet mode, prints nothing while downloading" },
  ] },
  ssh: { description: "Lets you log in to another computer over the network and control it.", flags: [
    { flag: "-p 2222", meaning: "Connects on port 2222 instead of the default 22" },
    { flag: "-i key.pem", meaning: "Logs in with a key file instead of a password" },
  ] },
  scp: { description: "Copies files between your computer and another one over ssh.", flags: [
    { flag: "-r", meaning: "Copies a whole folder" },
    { flag: "-P 2222", meaning: "Uses port 2222 for the connection" },
  ] },
  rsync: { description: "Syncs files and folders between places, copying only what changed.", flags: [
    { flag: "-a", meaning: "Archive mode: keeps permissions, dates and folders" },
    { flag: "-v", meaning: "Shows each file as it is copied" },
    { flag: "--progress", meaning: "Shows a progress bar for big files" },
  ] },
  netstat: { description: "Shows open network connections and listening ports. Older tool.", flags: [
    { flag: "-tulpn", meaning: "Shows listening TCP/UDP ports with the program using them" },
  ] },
  ss: { description: "The modern replacement for netstat: shows sockets and listening ports.", flags: [
    { flag: "-tulpn", meaning: "Shows listening ports and the programs behind them" },
  ] },
  traceroute: { description: "Shows every hop your data takes on the way to another computer.", flags: [
    { flag: "-n", meaning: "Shows IP numbers only, faster because it skips name lookups" },
  ] },
  nslookup: { description: "Looks up the IP address behind a domain name.", flags: [] },
  dig: { description: "Asks DNS servers detailed questions about a domain name.", flags: [
    { flag: "+short", meaning: "Prints only the short answer, like just the IP" },
    { flag: "MX", meaning: "Looks up the mail servers for the domain" },
  ] },
  host: { description: "A simple tool to turn a domain name into an IP address.", flags: [
    { flag: "-t MX", meaning: "Looks up a specific record type, like mail servers" },
  ] },
  hostname: { description: "Shows or sets the name of your computer on the network.", flags: [
    { flag: "-I", meaning: "Shows all your IP addresses" },
  ] },
  nmap: { description: "Scans a network or computer to see which ports are open.", flags: [
    { flag: "-sV", meaning: "Tries to detect which program version runs on each port" },
    { flag: "-p 1-1000", meaning: "Scans ports 1 to 1000" },
  ] },
  ftp: { description: "Transfers files to and from an FTP server. Old and unencrypted.", flags: [] },
  sftp: { description: "Transfers files securely over ssh, the safe version of ftp.", flags: [
    { flag: "-P 2222", meaning: "Connects on port 2222" },
  ] },
  telnet: { description: "Opens a plain text connection to a port, often used to test services.", flags: [] },
  arp: { description: "Shows the table that maps IP addresses to physical MAC addresses.", flags: [
    { flag: "-a", meaning: "Shows all entries in the table" },
  ] },
  mtr: { description: "Combines ping and traceroute into one live updating view.", flags: [
    { flag: "-n", meaning: "Shows IPs only, no name lookups" },
  ] },

  // System & processes
  whoami: { description: "Prints the name of the user you are logged in as.", flags: [] },
  uname: { description: "Shows basic information about your system, like the Linux kernel name and version.", flags: [
    { flag: "-a", meaning: "Shows everything: kernel, hostname, processor" },
    { flag: "-r", meaning: "Shows just the kernel version" },
  ] },
  htop: { description: "Shows a live, colourful list of running programs and how much memory and CPU they use.", flags: [
    { flag: "-u user", meaning: "Shows only one user's programs" },
    { flag: "-p 1234", meaning: "Watches only the program with that process ID" },
  ] },
  top: { description: "The classic live view of running programs and system load.", flags: [
    { flag: "-u user", meaning: "Shows only one user's programs" },
    { flag: "-d 5", meaning: "Refreshes every 5 seconds" },
  ] },
  ps: { description: "Lists the programs running on your system right now.", flags: [
    { flag: "aux", meaning: "Shows all programs from all users with details" },
    { flag: "-ef", meaning: "Shows all programs with their parent processes" },
  ] },
  kill: { description: "Sends a signal to a program, usually to ask it to stop.", flags: [
    { flag: "-9", meaning: "Force-kills the program immediately (last resort)" },
    { flag: "-15", meaning: "Politely asks the program to shut down (the default)" },
  ] },
  killall: { description: "Stops programs by name instead of by process number.", flags: [
    { flag: "-i", meaning: "Asks before killing each one" },
  ] },
  pkill: { description: "Kills programs whose names match a pattern.", flags: [
    { flag: "-f", meaning: "Matches against the full command line, not just the name" },
  ] },
  jobs: { description: "Lists the tasks you started and paused in the current terminal.", flags: [
    { flag: "-l", meaning: "Also shows the process ID of each task" },
  ] },
  bg: { description: "Resumes a paused task in the background so you can keep typing.", flags: [] },
  fg: { description: "Brings a background task back to the front of your terminal.", flags: [] },
  nice: { description: "Starts a program with a lower or higher priority.", flags: [
    { flag: "-n 10", meaning: "Runs the program nicer, giving others more CPU" },
  ] },
  renice: { description: "Changes the priority of a program that is already running.", flags: [
    { flag: "-n 5 -p 1234", meaning: "Sets priority 5 on process 1234" },
  ] },
  uptime: { description: "Shows how long the computer has been on and how busy it is.", flags: [
    { flag: "-p", meaning: "Shows the uptime in a pretty format like \"up 2 weeks\"" },
  ] },
  date: { description: "Shows or sets the current date and time.", flags: [
    { flag: "+%Y-%m-%d", meaning: "Prints the date in your own format" },
    { flag: "-u", meaning: "Shows the time in UTC instead of local time" },
  ] },
  cal: { description: "Prints a calendar for the current month.", flags: [
    { flag: "-y", meaning: "Shows the whole year" },
    { flag: "12 2026", meaning: "Shows December 2026" },
  ] },
  history: { description: "Shows the commands you typed before, with numbers.", flags: [
    { flag: "-c", meaning: "Clears the whole history" },
    { flag: "20", meaning: "Shows only the last 20 commands" },
  ] },
  alias: { description: "Creates a short nickname for a longer command.", flags: [
    { flag: "ll='ls -la'", meaning: "Makes ll run ls -la" },
  ] },
  unalias: { description: "Removes a nickname you created with alias.", flags: [
    { flag: "-a", meaning: "Removes all nicknames" },
  ] },
  env: { description: "Shows all your environment variables, like PATH and HOME.", flags: [
    { flag: "-i", meaning: "Runs a command with a completely empty environment" },
  ] },
  export: { description: "Creates or changes an environment variable for this session.", flags: [
    { flag: "EDITOR=nano", meaning: "Sets nano as your default editor" },
  ] },
  echo: { description: "Prints text or the value of a variable on the screen.", flags: [
    { flag: "-n", meaning: "Prints without a new line at the end" },
    { flag: "-e", meaning: "Understands special codes like \\n for new line" },
  ] },
  man: { description: "Opens the built-in manual page for any command.", flags: [
    { flag: "-k", meaning: "Searches manual pages by keyword" },
  ] },
  whatis: { description: "Shows a one-line description of a command.", flags: [] },
  apropos: { description: "Searches command descriptions when you can't remember the name.", flags: [] },
  clear: { description: "Wipes the terminal screen so you start fresh.", flags: [] },
  exit: { description: "Closes the terminal or logs you out of the current session.", flags: [] },
  shutdown: { description: "Turns the computer off, now or at a set time.", flags: [
    { flag: "-h now", meaning: "Shuts down immediately" },
    { flag: "-r +5", meaning: "Restarts in 5 minutes" },
  ] },
  reboot: { description: "Restarts the computer.", flags: [] },
  sleep: { description: "Waits for a number of seconds before doing the next thing.", flags: [
    { flag: "5", meaning: "Waits 5 seconds (use 5m for minutes)" },
  ] },
  watch: { description: "Runs a command again and again, showing the result live.", flags: [
    { flag: "-n 2", meaning: "Refreshes every 2 seconds" },
    { flag: "-d", meaning: "Highlights what changed between refreshes" },
  ] },
  time: { description: "Measures how long a command takes to run.", flags: [] },
  yes: { description: "Prints \"y\" forever, useful for auto-answering questions.", flags: [] },
  true: { description: "Does nothing and reports success. Used in scripts.", flags: [] },
  false: { description: "Does nothing and reports failure. Used in scripts.", flags: [] },
  id: { description: "Shows your user ID, group ID and the groups you belong to.", flags: [
    { flag: "-u", meaning: "Shows only your user ID number" },
    { flag: "-Gn", meaning: "Shows the names of all your groups" },
  ] },
  who: { description: "Shows who is logged in to the computer right now.", flags: [
    { flag: "-b", meaning: "Shows when the system was last started" },
  ] },
  w: { description: "Shows who is logged in and what they are doing.", flags: [] },
  last: { description: "Shows a list of recent logins.", flags: [
    { flag: "-n 10", meaning: "Shows only the last 10 logins" },
  ] },
  groups: { description: "Shows which groups a user belongs to.", flags: [] },
  passwd: { description: "Changes your password.", flags: [
    { flag: "-l", meaning: "Locks an account (admin only)" },
  ] },
  su: { description: "Switches to another user account, often the admin (root).", flags: [
    { flag: "-", meaning: "Also loads that user's full environment" },
  ] },
  sudo: { description: "Runs a command with administrator powers, after asking for your password.", flags: [
    { flag: "-i", meaning: "Opens a full admin shell" },
    { flag: "-u user", meaning: "Runs the command as a different user" },
  ] },
  useradd: { description: "Creates a new user account.", flags: [
    { flag: "-m", meaning: "Also creates their home folder" },
    { flag: "-s /bin/bash", meaning: "Gives them the bash shell" },
  ] },
  usermod: { description: "Changes an existing user account.", flags: [
    { flag: "-aG sudo", meaning: "Adds the user to the sudo group" },
  ] },
  userdel: { description: "Deletes a user account.", flags: [
    { flag: "-r", meaning: "Also deletes their home folder" },
  ] },
  groupadd: { description: "Creates a new group.", flags: [] },
  dmesg: { description: "Shows messages from the Linux kernel, useful for hardware problems.", flags: [
    { flag: "-H", meaning: "Human-friendly output with timestamps" },
    { flag: "-w", meaning: "Follows new messages live" },
  ] },
  journalctl: { description: "Reads the system logs collected by systemd.", flags: [
    { flag: "-u ssh", meaning: "Shows logs for one service only, like ssh" },
    { flag: "-f", meaning: "Follows new log entries live" },
    { flag: "--since today", meaning: "Shows only today's logs" },
  ] },
  systemctl: { description: "Starts, stops and checks background services.", flags: [
    { flag: "start ssh", meaning: "Starts the ssh service" },
    { flag: "status ssh", meaning: "Shows if the service is running" },
    { flag: "enable ssh", meaning: "Makes the service start at boot" },
  ] },
  service: { description: "The older way to start and stop background services.", flags: [
    { flag: "ssh restart", meaning: "Restarts the ssh service" },
  ] },
  crontab: { description: "Schedules commands to run automatically at set times.", flags: [
    { flag: "-e", meaning: "Edits your schedule" },
    { flag: "-l", meaning: "Lists your current schedule" },
  ] },
  lscpu: { description: "Shows details about your processor: cores, speed, model.", flags: [] },
  lsmod: { description: "Lists the kernel modules (drivers) currently loaded.", flags: [] },
  modprobe: { description: "Loads or removes a kernel module (driver).", flags: [
    { flag: "-r", meaning: "Removes the module instead of loading it" },
  ] },
  lsof: { description: "Lists which files and network connections each program has open.", flags: [
    { flag: "-i :80", meaning: "Shows which program is using port 80" },
    { flag: "-u user", meaning: "Shows files opened by one user" },
  ] },
  strace: { description: "Follows every system call a program makes, for deep debugging.", flags: [
    { flag: "-p 1234", meaning: "Attaches to an already running program" },
    { flag: "-c", meaning: "Shows a summary count instead of every call" },
  ] },

  // Packages & software
  apt: { description: "Installs, updates and removes software on Ubuntu and Debian.", flags: [
    { flag: "update", meaning: "Refreshes the list of available software" },
    { flag: "install git", meaning: "Installs a program, like git" },
    { flag: "remove git", meaning: "Uninstalls a program" },
  ] },
  "apt-get": { description: "The older, script-friendly version of apt.", flags: [
    { flag: "upgrade", meaning: "Upgrades all installed software" },
    { flag: "-y", meaning: "Answers yes to all questions automatically" },
  ] },
  dpkg: { description: "Installs and inspects .deb package files directly.", flags: [
    { flag: "-i file.deb", meaning: "Installs a .deb file" },
    { flag: "-l", meaning: "Lists all installed packages" },
  ] },
  dnf: { description: "Installs and updates software on Fedora and modern Red Hat systems.", flags: [
    { flag: "install git", meaning: "Installs a program" },
    { flag: "check-update", meaning: "Shows available updates" },
  ] },
  yum: { description: "The older package manager for Red Hat systems, replaced by dnf.", flags: [
    { flag: "install git", meaning: "Installs a program" },
    { flag: "update", meaning: "Updates all software" },
  ] },
  pacman: { description: "Installs and updates software on Arch Linux.", flags: [
    { flag: "-S git", meaning: "Installs a program" },
    { flag: "-Syu", meaning: "Updates the whole system" },
    { flag: "-R git", meaning: "Removes a program" },
  ] },
  snap: { description: "Installs self-contained snap packages on Ubuntu.", flags: [
    { flag: "install code", meaning: "Installs a snap package" },
    { flag: "list", meaning: "Shows installed snaps" },
  ] },
  flatpak: { description: "Installs sandboxed desktop apps that work on any distro.", flags: [
    { flag: "install", meaning: "Installs an app" },
    { flag: "list", meaning: "Shows installed apps" },
  ] },

  // Archives & compression
  tar: { description: "Bundles many files into one .tar archive, often compressed.", flags: [
    { flag: "-czf out.tar.gz folder/", meaning: "Creates a compressed archive of a folder" },
    { flag: "-xzf out.tar.gz", meaning: "Extracts a compressed archive" },
    { flag: "-tf out.tar.gz", meaning: "Lists what's inside without extracting" },
  ] },
  gzip: { description: "Compresses a single file into a smaller .gz file.", flags: [
    { flag: "-d", meaning: "Decompresses the file back" },
    { flag: "-k", meaning: "Keeps the original file too" },
  ] },
  gunzip: { description: "Decompresses a .gz file back to normal.", flags: [
    { flag: "-k", meaning: "Keeps the compressed file too" },
  ] },
  zip: { description: "Creates a .zip archive, handy for sharing with Windows users.", flags: [
    { flag: "-r out.zip folder/", meaning: "Zips a whole folder" },
  ] },
  unzip: { description: "Extracts a .zip archive.", flags: [
    { flag: "-l", meaning: "Lists the contents without extracting" },
    { flag: "-d target/", meaning: "Extracts into a specific folder" },
  ] },
  "7z": { description: "Compresses and extracts many archive formats with high compression.", flags: [
    { flag: "a out.7z folder/", meaning: "Creates an archive" },
    { flag: "x out.7z", meaning: "Extracts an archive" },
  ] },

  // Text editors & shell helpers
  nano: { description: "A simple text editor that opens right in the terminal. Great for beginners.", flags: [
    { flag: "-l", meaning: "Shows line numbers" },
    { flag: "-i", meaning: "Auto-indents new lines" },
  ] },
  vim: { description: "A powerful keyboard-driven text editor with a learning curve.", flags: [
    { flag: "+10", meaning: "Opens the file at line 10" },
    { flag: "-R", meaning: "Opens the file read-only" },
  ] },
  vi: { description: "The original editor that vim is based on. Found on almost every system.", flags: [] },
  emacs: { description: "A hugely extensible editor, almost an operating system of its own.", flags: [
    { flag: "-nw", meaning: "Runs inside the terminal without a window" },
  ] },
  git: { description: "Tracks changes to your code and lets you share it with others.", flags: [
    { flag: "status", meaning: "Shows what changed in your project" },
    { flag: "clone URL", meaning: "Downloads a copy of a project" },
    { flag: "commit -m \"msg\"", meaning: "Saves your changes with a message" },
    { flag: "push", meaning: "Sends your changes to the server" },
  ] },
  screen: { description: "Keeps terminal sessions alive even if you disconnect.", flags: [
    { flag: "-S name", meaning: "Starts a named session" },
    { flag: "-r name", meaning: "Reattaches to a session" },
  ] },
  tmux: { description: "Splits your terminal into panes and keeps sessions alive.", flags: [
    { flag: "new -s name", meaning: "Starts a named session" },
    { flag: "attach -t name", meaning: "Rejoins a session" },
  ] },
  source: { description: "Runs a script inside your current shell, so its settings stick.", flags: [] },
  type: { description: "Tells you whether a name is a command, alias or built-in.", flags: [
    { flag: "-a", meaning: "Shows all matches for the name" },
  ] },
  help: { description: "Shows help for the shell's built-in commands.", flags: [
    { flag: "cd", meaning: "Shows help for one built-in, like cd" },
  ] },
  whereis: { description: "Finds where a program, its source and its manual page live.", flags: [] },
  compgen: { description: "Lists all the commands you could type, used for auto-completion.", flags: [
    { flag: "-c", meaning: "Lists all commands" },
  ] },
  read: { description: "Waits for the user to type something and stores it in a variable.", flags: [
    { flag: "-p \"Name: \"", meaning: "Shows a prompt before reading" },
    { flag: "-s", meaning: "Hides what is typed, good for passwords" },
  ] },
  printf: { description: "Prints formatted text, more precise than echo.", flags: [
    { flag: "\"%s\\n\"", meaning: "Prints text followed by a new line" },
  ] },
  test: { description: "Checks conditions in scripts, like whether a file exists.", flags: [
    { flag: "-f file", meaning: "True if the file exists" },
    { flag: "-d folder", meaning: "True if the folder exists" },
  ] },
  expr: { description: "Does simple maths and string operations in old scripts.", flags: [] },
  bc: { description: "A calculator for the terminal that handles decimals.", flags: [
    { flag: "-l", meaning: "Loads the maths library for functions like sine" },
  ] },
  seq: { description: "Prints a sequence of numbers, like 1 to 10.", flags: [
    { flag: "1 10", meaning: "Prints 1 through 10" },
    { flag: "-s, ", meaning: "Separates the numbers with commas" },
  ] },
  shuf: { description: "Shuffles lines randomly, or picks random items.", flags: [
    { flag: "-n 1", meaning: "Picks just one random line" },
  ] },
  base64: { description: "Encodes or decodes text as base64, used for data in emails and APIs.", flags: [
    { flag: "-d", meaning: "Decodes instead of encodes" },
  ] },
  md5sum: { description: "Calculates the MD5 fingerprint of a file, to check it didn't change.", flags: [
    { flag: "-c", meaning: "Checks files against a saved list of fingerprints" },
  ] },
  sha256sum: { description: "Calculates the stronger SHA-256 fingerprint of a file.", flags: [
    { flag: "-c", meaning: "Verifies files against a checksum file" },
  ] },
  openssl: { description: "Encrypts data and works with certificates from the terminal.", flags: [
    { flag: "rand 16", meaning: "Generates 16 random bytes" },
    { flag: "s_client -connect site:443", meaning: "Tests a site's TLS certificate" },
  ] },
  chroot: { description: "Runs a command with a different folder pretending to be the root.", flags: [] },
  nohup: { description: "Keeps a program running even after you log out.", flags: [
    { flag: "cmd &", meaning: "Runs the command in the background, immune to hangup" },
  ] },
  at: { description: "Schedules a one-off command to run at a specific time.", flags: [
    { flag: "now + 1 hour", meaning: "Runs the command one hour from now" },
  ] },
  batch: { description: "Runs a command later, when the system is not busy.", flags: [] },
  wait: { description: "Pauses the script until background tasks have finished.", flags: [] },
  timeout: { description: "Runs a command but stops it if it takes too long.", flags: [
    { flag: "10s cmd", meaning: "Kills the command after 10 seconds" },
  ] },
  logger: { description: "Writes your own message into the system log.", flags: [
    { flag: "-t myapp", meaning: "Tags the message with a name" },
  ] },
  blkid: { description: "Shows the UUIDs and filesystem types of your disks.", flags: [] },
  swapon: { description: "Turns on a swap file or partition for extra memory.", flags: [
    { flag: "-s", meaning: "Shows a summary of active swap" },
  ] },
  swapoff: { description: "Turns off a swap file or partition.", flags: [
    { flag: "-a", meaning: "Turns off all swap" },
  ] },
  vmstat: { description: "Reports on memory, processes and CPU activity.", flags: [
    { flag: "2", meaning: "Refreshes every 2 seconds" },
  ] },
  iostat: { description: "Shows how busy your disks are.", flags: [
    { flag: "-x 2", meaning: "Extended stats, refreshing every 2 seconds" },
  ] },
  mpstat: { description: "Shows CPU usage for each processor core.", flags: [
    { flag: "-P ALL", meaning: "Shows every core" },
  ] },
  sar: { description: "Collects and reports system activity over time.", flags: [
    { flag: "-u 2 5", meaning: "CPU usage every 2 seconds, 5 times" },
  ] },
  finger: { description: "Shows information about a user, like login time. Old-school.", flags: [] },
  write: { description: "Sends a message to another logged-in user's terminal.", flags: [] },
  wall: { description: "Broadcasts a message to every logged-in user's terminal.", flags: [] },
  mesg: { description: "Controls whether other users can send messages to your terminal.", flags: [
    { flag: "n", meaning: "Blocks messages" },
    { flag: "y", meaning: "Allows messages" },
  ] },
  talk: { description: "Opens a two-way chat with another user on the system.", flags: [] },
  banner: { description: "Prints a big ASCII-art banner of your text.", flags: [] },
  figlet: { description: "Turns your text into large decorative ASCII letters.", flags: [
    { flag: "-f slant", meaning: "Uses the slanted font" },
  ] },
  cowsay: { description: "Makes a cow say your text in a speech bubble. Just for fun.", flags: [
    { flag: "-f tux", meaning: "Uses Tux the penguin instead of the cow" },
  ] },
  fortune: { description: "Prints a random quote or joke.", flags: [] },
};

export const COMMAND_GROUPS: { name: string; key: string; cmds: string[] }[] = [
  { name: "Files", key: "files", cmds: ["ls", "cd", "pwd", "head", "tail", "cat", "cp", "mv", "rm", "mkdir", "rmdir", "touch", "find", "locate", "which", "file", "ln", "chmod", "chown", "tree", "stat", "basename", "dirname", "realpath", "split", "shred"] },
  { name: "Text", key: "text", cmds: ["grep", "sed", "awk", "cut", "tr", "sort", "uniq", "diff", "wc", "less", "more", "tee", "xargs", "echo", "printf", "cat", "head", "tail", "nano", "vim", "vi", "emacs"] },
  { name: "Disk", key: "disk", cmds: ["df", "du", "lsblk", "mount", "umount", "fdisk", "mkfs", "fsck", "dd", "sync", "free", "lsusb", "lspci", "blkid", "swapon", "swapoff"] },
  { name: "Network", key: "network", cmds: ["ifconfig", "ip", "ping", "curl", "wget", "ssh", "scp", "rsync", "netstat", "ss", "traceroute", "nslookup", "dig", "host", "hostname", "nmap", "ftp", "sftp", "telnet", "arp", "mtr"] },
  { name: "System", key: "system", cmds: ["whoami", "uname", "htop", "top", "ps", "kill", "killall", "pkill", "jobs", "bg", "fg", "nice", "renice", "uptime", "date", "cal", "history", "alias", "unalias", "env", "export", "man", "whatis", "apropos", "clear", "exit", "shutdown", "reboot", "sleep", "watch", "time", "yes", "true", "false", "id", "who", "w", "last", "groups", "passwd", "su", "sudo", "useradd", "usermod", "userdel", "groupadd", "dmesg", "journalctl", "systemctl", "service", "crontab", "lscpu", "lsmod", "modprobe", "lsof", "strace", "vmstat", "iostat", "mpstat", "sar"] },
  { name: "Packages", key: "packages", cmds: ["apt", "apt-get", "dpkg", "dnf", "yum", "pacman", "snap", "flatpak"] },
  { name: "Archives", key: "archives", cmds: ["tar", "gzip", "gunzip", "zip", "unzip", "7z"] },
  { name: "Shell & fun", key: "shell", cmds: ["git", "screen", "tmux", "source", "type", "help", "whereis", "compgen", "read", "test", "expr", "bc", "seq", "shuf", "base64", "md5sum", "sha256sum", "openssl", "chroot", "nohup", "at", "batch", "wait", "timeout", "logger", "finger", "write", "wall", "mesg", "talk", "banner", "figlet", "cowsay", "fortune"] },
];
