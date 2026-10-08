export type Level = "beginner" | "intermediate" | "advanced";

export type CommandInfo = {
  description: string;
  level: Level;
  flags: { flag: string; meaning: string }[];
};

export const LEVEL_LABELS: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const COMMANDS: Record<string, CommandInfo> = {
  // Files & folders
  ls: { level: "beginner", description: "Lists the files and folders inside the folder you are in.", flags: [
    { flag: "-l", meaning: "Long list: shows size, owner, permissions and date for each file" },
    { flag: "-a", meaning: "Also shows hidden files (the ones starting with a dot)" },
    { flag: "-h", meaning: "Shows sizes in human-friendly units like 4K or 2M (use with -l)" },
    { flag: "-t", meaning: "Sorts by modification time, newest first" },
    { flag: "-r", meaning: "Reverses the sort order" },
    { flag: "-R", meaning: "Lists subfolders and their contents too, recursively" },
  ] },
  cd: { level: "beginner", description: "Moves you into a different folder, like double-clicking a folder.", flags: [
    { flag: "..", meaning: "Goes up one folder" },
    { flag: "~", meaning: "Goes straight to your home folder" },
    { flag: "-", meaning: "Goes back to the folder you were in before" },
    { flag: "../..", meaning: "Goes up two folders at once" },
  ] },
  pwd: { level: "beginner", description: "Shows the full path of the folder you are in right now.", flags: [
    { flag: "-P", meaning: "Shows the real path, resolving any shortcuts (symlinks)" },
    { flag: "-L", meaning: "Shows the logical path, keeping shortcuts (the default)" },
  ] },
  head: { level: "beginner", description: "Shows the first 10 lines of a file so you can peek at the start.", flags: [
    { flag: "-n 20", meaning: "Shows the first 20 lines instead of 10" },
    { flag: "-c 100", meaning: "Shows the first 100 bytes of the file" },
    { flag: "-q", meaning: "Skips the file-name header when reading several files" },
  ] },
  tail: { level: "beginner", description: "Shows the last 10 lines of a file, handy for reading the newest log entries.", flags: [
    { flag: "-n 50", meaning: "Shows the last 50 lines instead of 10" },
    { flag: "-f", meaning: "Follows the file: new lines appear live as they are written" },
    { flag: "-F", meaning: "Like -f, but keeps following even if the file is rotated or recreated" },
  ] },
  cat: { level: "beginner", description: "Prints the whole contents of a file on the screen.", flags: [
    { flag: "-n", meaning: "Adds line numbers in front of every line" },
    { flag: "-b", meaning: "Numbers only the lines that are not empty" },
    { flag: "-A", meaning: "Shows hidden characters like tabs and line endings" },
    { flag: "file1 file2", meaning: "Prints several files one after another, joined together" },
  ] },
  cp: { level: "beginner", description: "Makes a copy of a file or folder.", flags: [
    { flag: "-r", meaning: "Copies a whole folder and everything inside it" },
    { flag: "-i", meaning: "Asks before overwriting an existing file" },
    { flag: "-v", meaning: "Shows each file as it is copied" },
    { flag: "-p", meaning: "Keeps the original dates and permissions on the copy" },
    { flag: "-u", meaning: "Copies only when the source is newer than the destination" },
  ] },
  mv: { level: "beginner", description: "Moves a file to a new place, or renames it.", flags: [
    { flag: "-i", meaning: "Asks before overwriting an existing file" },
    { flag: "-v", meaning: "Shows each file as it is moved" },
    { flag: "-n", meaning: "Never overwrites an existing file" },
    { flag: "-u", meaning: "Moves only when the source is newer than the destination" },
  ] },
  rm: { level: "beginner", description: "Deletes files or folders. There is no recycle bin, so be careful.", flags: [
    { flag: "-r", meaning: "Deletes a folder and everything inside it" },
    { flag: "-i", meaning: "Asks before every single deletion" },
    { flag: "-f", meaning: "Deletes without asking or complaining" },
    { flag: "-v", meaning: "Shows each file as it is deleted" },
    { flag: "-d", meaning: "Deletes empty folders" },
  ] },
  mkdir: { level: "beginner", description: "Creates a new folder.", flags: [
    { flag: "-p", meaning: "Creates parent folders too, like a/b/c in one go" },
    { flag: "-v", meaning: "Prints a message for each folder created" },
    { flag: "-m 755", meaning: "Sets the permissions on the new folder right away" },
  ] },
  rmdir: { level: "beginner", description: "Deletes a folder, but only if it is completely empty.", flags: [
    { flag: "-p", meaning: "Also removes the empty parent folders" },
    { flag: "-v", meaning: "Prints a message for each folder removed" },
  ] },
  touch: { level: "beginner", description: "Creates a new empty file, or updates the date on an existing one.", flags: [
    { flag: "-d", meaning: "Sets a specific date on the file, like -d \"2026-01-01\"" },
    { flag: "-c", meaning: "Does not create the file if it does not exist" },
    { flag: "-a", meaning: "Updates only the access time, not the modification time" },
  ] },
  find: { level: "intermediate", description: "Searches for files and folders by name, size, date and more.", flags: [
    { flag: "-name", meaning: "Finds files whose name matches a pattern, like -name \"*.txt\"" },
    { flag: "-iname", meaning: "Same as -name but ignores upper/lowercase" },
    { flag: "-type d", meaning: "Finds only folders (use f for files)" },
    { flag: "-size +100M", meaning: "Finds files bigger than 100 megabytes" },
    { flag: "-mtime -7", meaning: "Finds files changed in the last 7 days" },
    { flag: "-exec cmd {} \\;", meaning: "Runs a command on every file found" },
  ] },
  locate: { level: "beginner", description: "Finds files super fast using a pre-built index of your disk.", flags: [
    { flag: "-i", meaning: "Ignores upper/lowercase when matching" },
    { flag: "-c", meaning: "Only counts how many matches there are" },
    { flag: "-l 10", meaning: "Stops after showing 10 results" },
  ] },
  which: { level: "beginner", description: "Shows where a program is installed on your system.", flags: [
    { flag: "-a", meaning: "Shows all matching locations, not just the first" },
  ] },
  file: { level: "beginner", description: "Tells you what kind of file something really is, ignoring its extension.", flags: [
    { flag: "-b", meaning: "Shows just the type, without the file name" },
    { flag: "-i", meaning: "Shows the MIME type, like text/plain or image/png" },
  ] },
  ln: { level: "intermediate", description: "Creates a link (shortcut) from one file to another.", flags: [
    { flag: "-s", meaning: "Makes a soft link, like a Windows shortcut" },
    { flag: "-f", meaning: "Replaces the link if it already exists" },
    { flag: "-v", meaning: "Shows each link as it is created" },
  ] },
  chmod: { level: "intermediate", description: "Changes who can read, write or run a file.", flags: [
    { flag: "+x", meaning: "Makes a file runnable as a program" },
    { flag: "755", meaning: "Owner can do everything, others can read and run" },
    { flag: "644", meaning: "Owner can read and write, others can only read" },
    { flag: "-R", meaning: "Applies the change to a folder and everything inside" },
    { flag: "u+w", meaning: "Adds write permission for the owner only" },
  ] },
  chown: { level: "intermediate", description: "Changes which user and group own a file.", flags: [
    { flag: "-R", meaning: "Changes ownership for a folder and everything inside" },
    { flag: "user:group", meaning: "Sets both the owner and the group at once" },
    { flag: "-v", meaning: "Shows each file as its ownership changes" },
  ] },
  wc: { level: "beginner", description: "Counts lines, words and characters in a file.", flags: [
    { flag: "-l", meaning: "Counts only the lines" },
    { flag: "-w", meaning: "Counts only the words" },
    { flag: "-c", meaning: "Counts only the bytes" },
    { flag: "-m", meaning: "Counts characters (different from bytes for accents and emoji)" },
  ] },
  sort: { level: "beginner", description: "Sorts the lines of a file alphabetically or numerically.", flags: [
    { flag: "-n", meaning: "Sorts by number instead of alphabetically" },
    { flag: "-r", meaning: "Reverses the order, biggest or Z first" },
    { flag: "-u", meaning: "Removes duplicate lines while sorting" },
    { flag: "-k 2", meaning: "Sorts by the second column instead of the first" },
    { flag: "-h", meaning: "Sorts human sizes like 2K and 5M correctly" },
  ] },
  uniq: { level: "beginner", description: "Removes or reports repeated lines that sit next to each other.", flags: [
    { flag: "-c", meaning: "Shows how many times each line was repeated" },
    { flag: "-d", meaning: "Shows only the lines that were repeated" },
    { flag: "-u", meaning: "Shows only the lines that were never repeated" },
  ] },
  diff: { level: "intermediate", description: "Shows the differences between two files, line by line.", flags: [
    { flag: "-u", meaning: "Shows differences in the unified format used by git" },
    { flag: "-y", meaning: "Shows the two files side by side" },
    { flag: "-r", meaning: "Compares two folders and everything inside them" },
    { flag: "-q", meaning: "Only says whether the files differ, without details" },
  ] },
  grep: { level: "beginner", description: "Searches inside files for lines that contain a word or pattern.", flags: [
    { flag: "-i", meaning: "Ignores upper/lowercase" },
    { flag: "-r", meaning: "Searches through a whole folder and its subfolders" },
    { flag: "-n", meaning: "Shows the line number of each match" },
    { flag: "-v", meaning: "Shows the lines that do NOT match" },
    { flag: "-c", meaning: "Only counts how many lines matched" },
    { flag: "-l", meaning: "Shows only the names of files that contain a match" },
    { flag: "-E", meaning: "Uses extended patterns, like grep -E \"cat|dog\"" },
  ] },
  sed: { level: "advanced", description: "Finds and replaces text inside files, straight from the terminal.", flags: [
    { flag: "'s/old/new/'", meaning: "Replaces \"old\" with \"new\" once per line" },
    { flag: "'s/old/new/g'", meaning: "Replaces every occurrence on each line" },
    { flag: "-i", meaning: "Edits the file in place instead of just printing" },
    { flag: "-n '5p'", meaning: "Prints only line 5 of the file" },
    { flag: "'/word/d'", meaning: "Deletes every line containing \"word\"" },
  ] },
  awk: { level: "advanced", description: "Cuts and processes text column by column, great for tables and logs.", flags: [
    { flag: "'{print $1}'", meaning: "Prints only the first column of each line" },
    { flag: "-F:", meaning: "Uses a colon instead of spaces to split columns" },
    { flag: "'{sum+=$1} END {print sum}'", meaning: "Adds up all numbers in the first column" },
    { flag: "'NR==5'", meaning: "Prints only line 5" },
  ] },
  cut: { level: "intermediate", description: "Cuts out selected columns or characters from each line.", flags: [
    { flag: "-d:", meaning: "Uses a colon as the column separator" },
    { flag: "-f1", meaning: "Keeps only the first column" },
    { flag: "-f1,3", meaning: "Keeps the first and third columns" },
    { flag: "-c1-5", meaning: "Keeps only the first five characters of each line" },
  ] },
  tr: { level: "intermediate", description: "Translates or deletes characters, like turning lowercase into uppercase.", flags: [
    { flag: "'a-z' 'A-Z'", meaning: "Converts lowercase letters to uppercase" },
    { flag: "-d", meaning: "Deletes the given characters" },
    { flag: "-s", meaning: "Squeezes repeated characters into one" },
  ] },
  less: { level: "beginner", description: "Opens a file one screen at a time so you can scroll through it calmly.", flags: [
    { flag: "-N", meaning: "Shows line numbers" },
    { flag: "-S", meaning: "Cuts long lines instead of wrapping them" },
    { flag: "-i", meaning: "Makes searches ignore upper/lowercase" },
    { flag: "+F", meaning: "Starts in follow mode, like tail -f" },
  ] },
  more: { level: "beginner", description: "Shows a file one screen at a time, the older simpler cousin of less.", flags: [
    { flag: "-d", meaning: "Shows helpful hints at the bottom of each page" },
    { flag: "-10", meaning: "Shows 10 lines per screen instead of a full page" },
  ] },
  tee: { level: "intermediate", description: "Sends output to the screen AND into a file at the same time.", flags: [
    { flag: "-a", meaning: "Adds to the end of the file instead of overwriting it" },
  ] },
  xargs: { level: "advanced", description: "Takes a list from one command and feeds it as arguments to another.", flags: [
    { flag: "-n 1", meaning: "Runs the command once per item" },
    { flag: "-0", meaning: "Handles file names that contain spaces safely" },
    { flag: "-P 4", meaning: "Runs 4 commands in parallel" },
    { flag: "-I {}", meaning: "Places each item exactly where {} appears in the command" },
  ] },
  tree: { level: "beginner", description: "Draws your folders and files as a nice tree diagram.", flags: [
    { flag: "-L 2", meaning: "Only shows 2 levels deep" },
    { flag: "-d", meaning: "Shows only folders, no files" },
    { flag: "-h", meaning: "Shows file sizes in human-friendly units" },
    { flag: "-a", meaning: "Shows hidden files too" },
  ] },
  stat: { level: "intermediate", description: "Shows detailed facts about a file: size, dates, permissions.", flags: [
    { flag: "-c %s", meaning: "Prints only the file size in bytes" },
    { flag: "-c %a", meaning: "Prints only the permissions as a number, like 755" },
  ] },
  basename: { level: "beginner", description: "Strips the folder path and leaves just the file name.", flags: [
    { flag: ".txt", meaning: "Also removes that extension from the end" },
  ] },
  dirname: { level: "beginner", description: "Strips the file name and leaves just the folder path.", flags: [] },
  realpath: { level: "intermediate", description: "Shows the full, real location of a file, resolving all shortcuts.", flags: [
    { flag: "-m", meaning: "Prints the path even if parts of it do not exist" },
  ] },
  split: { level: "intermediate", description: "Splits a big file into smaller pieces.", flags: [
    { flag: "-l 1000", meaning: "Splits every 1000 lines" },
    { flag: "-b 10M", meaning: "Splits every 10 megabytes" },
    { flag: "-d", meaning: "Names the pieces with numbers instead of letters" },
  ] },
  shred: { level: "advanced", description: "Deletes a file securely by overwriting it with random data first.", flags: [
    { flag: "-u", meaning: "Removes the file after overwriting it" },
    { flag: "-n 3", meaning: "Overwrites the file 3 times" },
    { flag: "-z", meaning: "Finishes with zeros so the shredding is hidden" },
  ] },

  // Disk & storage
  df: { level: "beginner", description: "Shows how much space is used and free on each of your disks.", flags: [
    { flag: "-h", meaning: "Shows sizes in human-friendly units like G and M" },
    { flag: "-T", meaning: "Also shows the filesystem type of each disk" },
    { flag: "-i", meaning: "Shows inode usage instead of space usage" },
    { flag: "/home", meaning: "Shows only the disk that holds the /home folder" },
  ] },
  du: { level: "beginner", description: "Shows how much disk space a file or folder takes up.", flags: [
    { flag: "-h", meaning: "Human-friendly sizes like 4K or 2G" },
    { flag: "-s", meaning: "Shows only one total per folder, not every subfolder" },
    { flag: "--max-depth=1", meaning: "Shows sizes of subfolders but no deeper" },
    { flag: "-a", meaning: "Shows files as well as folders" },
    { flag: "--exclude=\"*.tmp\"", meaning: "Skips files matching a pattern" },
  ] },
  lsblk: { level: "intermediate", description: "Lists the disks and partitions connected to your computer.", flags: [
    { flag: "-f", meaning: "Also shows the filesystem type and labels" },
    { flag: "-a", meaning: "Shows empty devices too" },
    { flag: "-o NAME,SIZE,FSTYPE", meaning: "Shows only the columns you choose" },
  ] },
  mount: { level: "advanced", description: "Attaches a disk or USB drive so you can use its files.", flags: [
    { flag: "-t", meaning: "Says which filesystem type to use, like -t ext4" },
    { flag: "-o ro", meaning: "Mounts read-only so nothing can be changed" },
    { flag: "-o remount,rw", meaning: "Switches a mounted disk to read-write" },
  ] },
  umount: { level: "intermediate", description: "Detaches a disk safely before you unplug it.", flags: [
    { flag: "-l", meaning: "Lazy unmount: detaches when the disk stops being busy" },
    { flag: "-f", meaning: "Forces the unmount (risky, use as a last resort)" },
  ] },
  fdisk: { level: "advanced", description: "Views and edits the partition table of a disk. Use with care.", flags: [
    { flag: "-l", meaning: "Lists partitions on all disks without changing anything" },
  ] },
  mkfs: { level: "advanced", description: "Formats a partition with a new filesystem, erasing what was there.", flags: [
    { flag: "-t ext4", meaning: "Formats with the ext4 filesystem" },
    { flag: "-t vfat", meaning: "Formats with FAT32, good for USB sticks" },
  ] },
  fsck: { level: "advanced", description: "Checks a disk for filesystem errors and can repair them.", flags: [
    { flag: "-y", meaning: "Answers yes to all repair questions" },
    { flag: "-n", meaning: "Only checks, repairs nothing (safe dry run)" },
    { flag: "-p", meaning: "Automatically fixes safe problems without asking" },
  ] },
  dd: { level: "advanced", description: "Copies raw data between disks and files, byte by byte. Very powerful, very dangerous.", flags: [
    { flag: "if=", meaning: "Input file or disk to read from" },
    { flag: "of=", meaning: "Output file or disk to write to" },
    { flag: "bs=4M", meaning: "Copies in 4-megabyte blocks, much faster" },
    { flag: "status=progress", meaning: "Shows a live progress bar" },
    { flag: "conv=fsync", meaning: "Makes sure everything is truly written before finishing" },
  ] },
  sync: { level: "intermediate", description: "Forces all pending writes to be saved to disk right now.", flags: [] },
  free: { level: "beginner", description: "Shows how much memory (RAM) is used and free.", flags: [
    { flag: "-h", meaning: "Human-friendly sizes like 2.0G" },
    { flag: "-m", meaning: "Shows sizes in megabytes" },
    { flag: "-s 2", meaning: "Refreshes every 2 seconds" },
  ] },
  lsusb: { level: "intermediate", description: "Lists the USB devices plugged into your computer.", flags: [
    { flag: "-v", meaning: "Shows very detailed information about each device" },
    { flag: "-t", meaning: "Shows the devices as a tree with their speeds" },
  ] },
  lspci: { level: "intermediate", description: "Lists the PCI devices in your computer, like graphics and network cards.", flags: [
    { flag: "-v", meaning: "Shows more detail about each device" },
    { flag: "-k", meaning: "Shows which kernel driver each device is using" },
  ] },

  // Network
  ifconfig: { level: "intermediate", description: "Shows your network connections and their IP addresses. Older but common.", flags: [
    { flag: "-a", meaning: "Shows all connections, even inactive ones" },
    { flag: "eth0 up", meaning: "Turns a network connection on" },
  ] },
  ip: { level: "intermediate", description: "The modern tool for viewing and changing network settings.", flags: [
    { flag: "addr", meaning: "Shows your IP addresses" },
    { flag: "link", meaning: "Shows your network cards" },
    { flag: "route", meaning: "Shows where your traffic is sent" },
    { flag: "-4 addr", meaning: "Shows only IPv4 addresses" },
    { flag: "addr add 10.0.0.5/24 dev eth0", meaning: "Gives a network card a new IP address" },
  ] },
  ping: { level: "beginner", description: "Checks if another computer or website can be reached and how fast it replies.", flags: [
    { flag: "-c 4", meaning: "Sends only 4 pings then stops" },
    { flag: "-i 0.5", meaning: "Pings twice per second" },
    { flag: "-W 2", meaning: "Gives up waiting for a reply after 2 seconds" },
  ] },
  curl: { level: "intermediate", description: "Downloads or sends data to a web address straight from the terminal.", flags: [
    { flag: "-O", meaning: "Saves the download with its original file name" },
    { flag: "-o out.html", meaning: "Saves the download under a name you choose" },
    { flag: "-L", meaning: "Follows redirects to the final address" },
    { flag: "-I", meaning: "Fetches only the headers, not the content" },
    { flag: "-s", meaning: "Silent mode: no progress meter, just the data" },
    { flag: "-d \"a=1\"", meaning: "Sends data with a POST request" },
    { flag: "-H \"Accept: json\"", meaning: "Adds a request header" },
  ] },
  wget: { level: "beginner", description: "Downloads files from the web, good for big or repeated downloads.", flags: [
    { flag: "-c", meaning: "Continues an interrupted download" },
    { flag: "-q", meaning: "Quiet mode, prints nothing while downloading" },
    { flag: "-O out.zip", meaning: "Saves the file under a name you choose" },
    { flag: "-r", meaning: "Downloads a whole page and the files it links to" },
    { flag: "--limit-rate=1m", meaning: "Caps the download speed at 1 MB per second" },
  ] },
  ssh: { level: "intermediate", description: "Lets you log in to another computer over the network and control it.", flags: [
    { flag: "-p 2222", meaning: "Connects on port 2222 instead of the default 22" },
    { flag: "-i key.pem", meaning: "Logs in with a key file instead of a password" },
    { flag: "-v", meaning: "Verbose mode: shows what is happening, useful for problems" },
    { flag: "-L 8080:localhost:80", meaning: "Forwards a local port through the connection" },
    { flag: "-N", meaning: "Sets up forwarding without opening a shell" },
  ] },
  scp: { level: "intermediate", description: "Copies files between your computer and another one over ssh.", flags: [
    { flag: "-r", meaning: "Copies a whole folder" },
    { flag: "-P 2222", meaning: "Uses port 2222 for the connection" },
    { flag: "-i key.pem", meaning: "Uses a key file to log in" },
    { flag: "-C", meaning: "Compresses the data during transfer" },
  ] },
  rsync: { level: "intermediate", description: "Syncs files and folders between places, copying only what changed.", flags: [
    { flag: "-a", meaning: "Archive mode: keeps permissions, dates and folders" },
    { flag: "-v", meaning: "Shows each file as it is copied" },
    { flag: "--progress", meaning: "Shows a progress bar for big files" },
    { flag: "-z", meaning: "Compresses data during transfer, good over slow links" },
    { flag: "--delete", meaning: "Removes files at the destination that no longer exist at the source" },
    { flag: "-n", meaning: "Dry run: shows what would happen without copying anything" },
  ] },
  netstat: { level: "intermediate", description: "Shows open network connections and listening ports. Older tool.", flags: [
    { flag: "-tulpn", meaning: "Shows listening TCP/UDP ports with the program using them" },
    { flag: "-r", meaning: "Shows the routing table" },
  ] },
  ss: { level: "intermediate", description: "The modern replacement for netstat: shows sockets and listening ports.", flags: [
    { flag: "-tulpn", meaning: "Shows listening ports and the programs behind them" },
    { flag: "-s", meaning: "Shows a quick summary of all connections" },
    { flag: "state established", meaning: "Shows only active connections" },
  ] },
  traceroute: { level: "intermediate", description: "Shows every hop your data takes on the way to another computer.", flags: [
    { flag: "-n", meaning: "Shows IP numbers only, faster because it skips name lookups" },
    { flag: "-m 15", meaning: "Stops after 15 hops instead of 30" },
  ] },
  nslookup: { level: "beginner", description: "Looks up the IP address behind a domain name.", flags: [
    { flag: "-type=MX", meaning: "Looks up the mail servers for the domain" },
  ] },
  dig: { level: "intermediate", description: "Asks DNS servers detailed questions about a domain name.", flags: [
    { flag: "+short", meaning: "Prints only the short answer, like just the IP" },
    { flag: "MX", meaning: "Looks up the mail servers for the domain" },
    { flag: "@8.8.8.8", meaning: "Asks a specific DNS server, like Google's 8.8.8.8" },
    { flag: "+trace", meaning: "Follows the whole lookup chain from the root servers" },
  ] },
  host: { level: "beginner", description: "A simple tool to turn a domain name into an IP address.", flags: [
    { flag: "-t MX", meaning: "Looks up a specific record type, like mail servers" },
    { flag: "-a", meaning: "Shows all records for the domain" },
  ] },
  hostname: { level: "beginner", description: "Shows or sets the name of your computer on the network.", flags: [
    { flag: "-I", meaning: "Shows all your IP addresses" },
    { flag: "-f", meaning: "Shows the full domain name of the computer" },
  ] },
  nmap: { level: "advanced", description: "Scans a network or computer to see which ports are open.", flags: [
    { flag: "-sV", meaning: "Tries to detect which program version runs on each port" },
    { flag: "-p 1-1000", meaning: "Scans ports 1 to 1000" },
    { flag: "-sn", meaning: "Ping scan: just finds which machines are alive" },
    { flag: "-O", meaning: "Tries to guess the operating system of the target" },
  ] },
  ftp: { level: "intermediate", description: "Transfers files to and from an FTP server. Old and unencrypted.", flags: [
    { flag: "-p", meaning: "Uses passive mode, which works better behind firewalls" },
  ] },
  sftp: { level: "intermediate", description: "Transfers files securely over ssh, the safe version of ftp.", flags: [
    { flag: "-P 2222", meaning: "Connects on port 2222" },
    { flag: "-r", meaning: "Transfers whole folders" },
  ] },
  telnet: { level: "intermediate", description: "Opens a plain text connection to a port, often used to test services.", flags: [] },
  arp: { level: "advanced", description: "Shows the table that maps IP addresses to physical MAC addresses.", flags: [
    { flag: "-a", meaning: "Shows all entries in the table" },
    { flag: "-d", meaning: "Deletes an entry from the table" },
  ] },
  mtr: { level: "intermediate", description: "Combines ping and traceroute into one live updating view.", flags: [
    { flag: "-n", meaning: "Shows IPs only, no name lookups" },
    { flag: "-r", meaning: "Runs for a while then prints a report and exits" },
  ] },

  // System & processes
  whoami: { level: "beginner", description: "Prints the name of the user you are logged in as.", flags: [] },
  uname: { level: "beginner", description: "Shows basic information about your system, like the Linux kernel name and version.", flags: [
    { flag: "-a", meaning: "Shows everything: kernel, hostname, processor" },
    { flag: "-r", meaning: "Shows just the kernel version" },
    { flag: "-m", meaning: "Shows the machine type, like x86_64" },
  ] },
  htop: { level: "beginner", description: "Shows a live, colourful list of running programs and how much memory and CPU they use.", flags: [
    { flag: "-u user", meaning: "Shows only one user's programs" },
    { flag: "-p 1234", meaning: "Watches only the program with that process ID" },
    { flag: "-t", meaning: "Shows programs as a tree of parents and children" },
  ] },
  top: { level: "beginner", description: "The classic live view of running programs and system load.", flags: [
    { flag: "-u user", meaning: "Shows only one user's programs" },
    { flag: "-d 5", meaning: "Refreshes every 5 seconds" },
    { flag: "-b", meaning: "Batch mode: prints once instead of taking over the screen" },
  ] },
  ps: { level: "intermediate", description: "Lists the programs running on your system right now.", flags: [
    { flag: "aux", meaning: "Shows all programs from all users with details" },
    { flag: "-ef", meaning: "Shows all programs with their parent processes" },
    { flag: "--forest", meaning: "Draws the programs as a tree of parents and children" },
    { flag: "-u user", meaning: "Shows only one user's programs" },
  ] },
  kill: { level: "beginner", description: "Sends a signal to a program, usually to ask it to stop.", flags: [
    { flag: "-9", meaning: "Force-kills the program immediately (last resort)" },
    { flag: "-15", meaning: "Politely asks the program to shut down (the default)" },
    { flag: "-l", meaning: "Lists all the signals you can send" },
  ] },
  killall: { level: "intermediate", description: "Stops programs by name instead of by process number.", flags: [
    { flag: "-i", meaning: "Asks before killing each one" },
    { flag: "-u user", meaning: "Kills only programs owned by that user" },
  ] },
  pkill: { level: "intermediate", description: "Kills programs whose names match a pattern.", flags: [
    { flag: "-f", meaning: "Matches against the full command line, not just the name" },
    { flag: "-u user", meaning: "Kills only programs owned by that user" },
  ] },
  jobs: { level: "beginner", description: "Lists the tasks you started and paused in the current terminal.", flags: [
    { flag: "-l", meaning: "Also shows the process ID of each task" },
  ] },
  bg: { level: "beginner", description: "Resumes a paused task in the background so you can keep typing.", flags: [] },
  fg: { level: "beginner", description: "Brings a background task back to the front of your terminal.", flags: [] },
  nice: { level: "intermediate", description: "Starts a program with a lower or higher priority.", flags: [
    { flag: "-n 10", meaning: "Runs the program nicer, giving others more CPU" },
    { flag: "-n -5", meaning: "Runs the program with higher priority (needs admin rights)" },
  ] },
  renice: { level: "advanced", description: "Changes the priority of a program that is already running.", flags: [
    { flag: "-n 5 -p 1234", meaning: "Sets priority 5 on process 1234" },
    { flag: "-n 10 -u user", meaning: "Lowers the priority of everything one user runs" },
  ] },
  uptime: { level: "beginner", description: "Shows how long the computer has been on and how busy it is.", flags: [
    { flag: "-p", meaning: "Shows the uptime in a pretty format like \"up 2 weeks\"" },
    { flag: "-s", meaning: "Shows the exact date and time the system started" },
  ] },
  date: { level: "beginner", description: "Shows or sets the current date and time.", flags: [
    { flag: "+%Y-%m-%d", meaning: "Prints the date in your own format" },
    { flag: "-u", meaning: "Shows the time in UTC instead of local time" },
    { flag: "-d \"next Friday\"", meaning: "Prints the date of a day you describe in words" },
  ] },
  cal: { level: "beginner", description: "Prints a calendar for the current month.", flags: [
    { flag: "-y", meaning: "Shows the whole year" },
    { flag: "-3", meaning: "Shows last month, this month and next month" },
    { flag: "12 2026", meaning: "Shows December 2026" },
  ] },
  history: { level: "beginner", description: "Shows the commands you typed before, with numbers.", flags: [
    { flag: "-c", meaning: "Clears the whole history" },
    { flag: "20", meaning: "Shows only the last 20 commands" },
    { flag: "!42", meaning: "Re-runs command number 42 from the list" },
  ] },
  alias: { level: "beginner", description: "Creates a short nickname for a longer command.", flags: [
    { flag: "ll='ls -la'", meaning: "Makes ll run ls -la" },
    { flag: "-p", meaning: "Lists all the nicknames currently set" },
  ] },
  unalias: { level: "beginner", description: "Removes a nickname you created with alias.", flags: [
    { flag: "-a", meaning: "Removes all nicknames" },
  ] },
  env: { level: "intermediate", description: "Shows all your environment variables, like PATH and HOME.", flags: [
    { flag: "-i", meaning: "Runs a command with a completely empty environment" },
    { flag: "VAR=1 cmd", meaning: "Runs a command with one variable set differently" },
  ] },
  export: { level: "intermediate", description: "Creates or changes an environment variable for this session.", flags: [
    { flag: "EDITOR=nano", meaning: "Sets nano as your default editor" },
    { flag: "PATH=$PATH:/opt/bin", meaning: "Adds a folder to the program search path" },
  ] },
  echo: { level: "beginner", description: "Prints text or the value of a variable on the screen.", flags: [
    { flag: "-n", meaning: "Prints without a new line at the end" },
    { flag: "-e", meaning: "Understands special codes like \\n for new line" },
    { flag: "$HOME", meaning: "Prints the value of a variable, like your home folder" },
  ] },
  man: { level: "beginner", description: "Opens the built-in manual page for any command.", flags: [
    { flag: "-k", meaning: "Searches manual pages by keyword" },
    { flag: "5 passwd", meaning: "Opens section 5 of the manual, for file formats" },
  ] },
  whatis: { level: "beginner", description: "Shows a one-line description of a command.", flags: [] },
  apropos: { level: "beginner", description: "Searches command descriptions when you can't remember the name.", flags: [] },
  clear: { level: "beginner", description: "Wipes the terminal screen so you start fresh.", flags: [] },
  exit: { level: "beginner", description: "Closes the terminal or logs you out of the current session.", flags: [] },
  shutdown: { level: "intermediate", description: "Turns the computer off, now or at a set time.", flags: [
    { flag: "-h now", meaning: "Shuts down immediately" },
    { flag: "-r +5", meaning: "Restarts in 5 minutes" },
    { flag: "-c", meaning: "Cancels a scheduled shutdown" },
  ] },
  reboot: { level: "intermediate", description: "Restarts the computer.", flags: [] },
  sleep: { level: "beginner", description: "Waits for a number of seconds before doing the next thing.", flags: [
    { flag: "5", meaning: "Waits 5 seconds (use 5m for minutes)" },
  ] },
  watch: { level: "intermediate", description: "Runs a command again and again, showing the result live.", flags: [
    { flag: "-n 2", meaning: "Refreshes every 2 seconds" },
    { flag: "-d", meaning: "Highlights what changed between refreshes" },
    { flag: "-t", meaning: "Hides the header for a cleaner view" },
  ] },
  time: { level: "beginner", description: "Measures how long a command takes to run.", flags: [] },
  yes: { level: "beginner", description: "Prints \"y\" forever, useful for auto-answering questions.", flags: [] },
  true: { level: "intermediate", description: "Does nothing and reports success. Used in scripts.", flags: [] },
  false: { level: "intermediate", description: "Does nothing and reports failure. Used in scripts.", flags: [] },
  id: { level: "beginner", description: "Shows your user ID, group ID and the groups you belong to.", flags: [
    { flag: "-u", meaning: "Shows only your user ID number" },
    { flag: "-Gn", meaning: "Shows the names of all your groups" },
  ] },
  who: { level: "beginner", description: "Shows who is logged in to the computer right now.", flags: [
    { flag: "-b", meaning: "Shows when the system was last started" },
    { flag: "-q", meaning: "Shows just the names and a count" },
  ] },
  w: { level: "beginner", description: "Shows who is logged in and what they are doing.", flags: [] },
  last: { level: "intermediate", description: "Shows a list of recent logins.", flags: [
    { flag: "-n 10", meaning: "Shows only the last 10 logins" },
    { flag: "reboot", meaning: "Shows when the system was restarted" },
  ] },
  groups: { level: "beginner", description: "Shows which groups a user belongs to.", flags: [] },
  passwd: { level: "beginner", description: "Changes your password.", flags: [
    { flag: "-l", meaning: "Locks an account (admin only)" },
    { flag: "-u", meaning: "Unlocks a locked account (admin only)" },
  ] },
  su: { level: "intermediate", description: "Switches to another user account, often the admin (root).", flags: [
    { flag: "-", meaning: "Also loads that user's full environment" },
    { flag: "-c \"cmd\"", meaning: "Runs just one command as that user" },
  ] },
  sudo: { level: "beginner", description: "Runs a command with administrator powers, after asking for your password.", flags: [
    { flag: "-i", meaning: "Opens a full admin shell" },
    { flag: "-u user", meaning: "Runs the command as a different user" },
    { flag: "-k", meaning: "Forgets your password so the next sudo asks again" },
    { flag: "!!", meaning: "Re-runs your previous command with sudo" },
  ] },
  useradd: { level: "advanced", description: "Creates a new user account.", flags: [
    { flag: "-m", meaning: "Also creates their home folder" },
    { flag: "-s /bin/bash", meaning: "Gives them the bash shell" },
    { flag: "-G sudo", meaning: "Adds them to extra groups right away" },
  ] },
  usermod: { level: "advanced", description: "Changes an existing user account.", flags: [
    { flag: "-aG sudo", meaning: "Adds the user to the sudo group" },
    { flag: "-l newname", meaning: "Renames the user" },
    { flag: "-L", meaning: "Locks the account" },
  ] },
  userdel: { level: "advanced", description: "Deletes a user account.", flags: [
    { flag: "-r", meaning: "Also deletes their home folder" },
    { flag: "-f", meaning: "Forces deletion even if the user is logged in" },
  ] },
  groupadd: { level: "advanced", description: "Creates a new group.", flags: [] },
  dmesg: { level: "intermediate", description: "Shows messages from the Linux kernel, useful for hardware problems.", flags: [
    { flag: "-H", meaning: "Human-friendly output with timestamps" },
    { flag: "-w", meaning: "Follows new messages live" },
    { flag: "-l err", meaning: "Shows only error messages" },
  ] },
  journalctl: { level: "intermediate", description: "Reads the system logs collected by systemd.", flags: [
    { flag: "-u ssh", meaning: "Shows logs for one service only, like ssh" },
    { flag: "-f", meaning: "Follows new log entries live" },
    { flag: "--since today", meaning: "Shows only today's logs" },
    { flag: "-p err", meaning: "Shows only errors and worse" },
    { flag: "-b", meaning: "Shows logs since the last boot" },
  ] },
  systemctl: { level: "intermediate", description: "Starts, stops and checks background services.", flags: [
    { flag: "start ssh", meaning: "Starts the ssh service" },
    { flag: "stop ssh", meaning: "Stops the service" },
    { flag: "restart ssh", meaning: "Stops then starts the service" },
    { flag: "status ssh", meaning: "Shows if the service is running" },
    { flag: "enable ssh", meaning: "Makes the service start at boot" },
    { flag: "list-units --type=service", meaning: "Lists all services and their state" },
  ] },
  service: { level: "intermediate", description: "The older way to start and stop background services.", flags: [
    { flag: "ssh restart", meaning: "Restarts the ssh service" },
    { flag: "--status-all", meaning: "Shows the state of every service" },
  ] },
  crontab: { level: "advanced", description: "Schedules commands to run automatically at set times.", flags: [
    { flag: "-e", meaning: "Edits your schedule" },
    { flag: "-l", meaning: "Lists your current schedule" },
    { flag: "-r", meaning: "Deletes your whole schedule" },
  ] },
  lscpu: { level: "beginner", description: "Shows details about your processor: cores, speed, model.", flags: [] },
  lsmod: { level: "advanced", description: "Lists the kernel modules (drivers) currently loaded.", flags: [] },
  modprobe: { level: "advanced", description: "Loads or removes a kernel module (driver).", flags: [
    { flag: "-r", meaning: "Removes the module instead of loading it" },
    { flag: "-n", meaning: "Dry run: shows what would happen without doing it" },
  ] },
  lsof: { level: "advanced", description: "Lists which files and network connections each program has open.", flags: [
    { flag: "-i :80", meaning: "Shows which program is using port 80" },
    { flag: "-u user", meaning: "Shows files opened by one user" },
    { flag: "+D /var/log", meaning: "Shows which programs have files open in a folder" },
  ] },
  strace: { level: "advanced", description: "Follows every system call a program makes, for deep debugging.", flags: [
    { flag: "-p 1234", meaning: "Attaches to an already running program" },
    { flag: "-c", meaning: "Shows a summary count instead of every call" },
    { flag: "-e open", meaning: "Traces only one kind of call, like file opens" },
  ] },

  // Packages & software
  apt: { level: "beginner", description: "Installs, updates and removes software on Ubuntu and Debian.", flags: [
    { flag: "update", meaning: "Refreshes the list of available software" },
    { flag: "upgrade", meaning: "Upgrades all installed software" },
    { flag: "install git", meaning: "Installs a program, like git" },
    { flag: "remove git", meaning: "Uninstalls a program" },
    { flag: "search editor", meaning: "Searches for software by name" },
    { flag: "show git", meaning: "Shows details about a package" },
  ] },
  "apt-get": { level: "intermediate", description: "The older, script-friendly version of apt.", flags: [
    { flag: "upgrade", meaning: "Upgrades all installed software" },
    { flag: "-y", meaning: "Answers yes to all questions automatically" },
    { flag: "autoremove", meaning: "Removes packages that are no longer needed" },
  ] },
  dpkg: { level: "advanced", description: "Installs and inspects .deb package files directly.", flags: [
    { flag: "-i file.deb", meaning: "Installs a .deb file" },
    { flag: "-l", meaning: "Lists all installed packages" },
    { flag: "-L git", meaning: "Lists the files a package installed" },
    { flag: "-r git", meaning: "Removes a package" },
  ] },
  dnf: { level: "intermediate", description: "Installs and updates software on Fedora and modern Red Hat systems.", flags: [
    { flag: "install git", meaning: "Installs a program" },
    { flag: "check-update", meaning: "Shows available updates" },
    { flag: "remove git", meaning: "Uninstalls a program" },
    { flag: "search editor", meaning: "Searches for software by name" },
  ] },
  yum: { level: "intermediate", description: "The older package manager for Red Hat systems, replaced by dnf.", flags: [
    { flag: "install git", meaning: "Installs a program" },
    { flag: "update", meaning: "Updates all software" },
    { flag: "remove git", meaning: "Uninstalls a program" },
  ] },
  pacman: { level: "intermediate", description: "Installs and updates software on Arch Linux.", flags: [
    { flag: "-S git", meaning: "Installs a program" },
    { flag: "-Syu", meaning: "Updates the whole system" },
    { flag: "-R git", meaning: "Removes a program" },
    { flag: "-Ss editor", meaning: "Searches for software by name" },
    { flag: "-Q", meaning: "Lists everything installed" },
  ] },
  snap: { level: "beginner", description: "Installs self-contained snap packages on Ubuntu.", flags: [
    { flag: "install code", meaning: "Installs a snap package" },
    { flag: "list", meaning: "Shows installed snaps" },
    { flag: "remove code", meaning: "Uninstalls a snap" },
    { flag: "find editor", meaning: "Searches the snap store" },
  ] },
  flatpak: { level: "beginner", description: "Installs sandboxed desktop apps that work on any distro.", flags: [
    { flag: "install", meaning: "Installs an app" },
    { flag: "list", meaning: "Shows installed apps" },
    { flag: "uninstall", meaning: "Removes an app" },
    { flag: "update", meaning: "Updates all installed apps" },
  ] },

  // Archives & compression
  tar: { level: "intermediate", description: "Bundles many files into one .tar archive, often compressed.", flags: [
    { flag: "-czf out.tar.gz folder/", meaning: "Creates a compressed archive of a folder" },
    { flag: "-xzf out.tar.gz", meaning: "Extracts a compressed archive" },
    { flag: "-tf out.tar.gz", meaning: "Lists what's inside without extracting" },
    { flag: "-xzf out.tar.gz -C /tmp", meaning: "Extracts into a specific folder" },
    { flag: "-cjf out.tar.bz2 folder/", meaning: "Creates an archive with bzip2 compression" },
    { flag: "--exclude='*.log'", meaning: "Skips matching files when creating an archive" },
  ] },
  gzip: { level: "beginner", description: "Compresses a single file into a smaller .gz file.", flags: [
    { flag: "-d", meaning: "Decompresses the file back" },
    { flag: "-k", meaning: "Keeps the original file too" },
    { flag: "-9", meaning: "Compresses as much as possible, but slower" },
    { flag: "-l", meaning: "Shows how much smaller the compressed file is" },
  ] },
  gunzip: { level: "beginner", description: "Decompresses a .gz file back to normal.", flags: [
    { flag: "-k", meaning: "Keeps the compressed file too" },
  ] },
  zip: { level: "beginner", description: "Creates a .zip archive, handy for sharing with Windows users.", flags: [
    { flag: "-r out.zip folder/", meaning: "Zips a whole folder" },
    { flag: "-e", meaning: "Protects the zip with a password" },
    { flag: "-9", meaning: "Compresses as much as possible" },
  ] },
  unzip: { level: "beginner", description: "Extracts a .zip archive.", flags: [
    { flag: "-l", meaning: "Lists the contents without extracting" },
    { flag: "-d target/", meaning: "Extracts into a specific folder" },
    { flag: "-o", meaning: "Overwrites existing files without asking" },
  ] },
  "7z": { level: "intermediate", description: "Compresses and extracts many archive formats with high compression.", flags: [
    { flag: "a out.7z folder/", meaning: "Creates an archive" },
    { flag: "x out.7z", meaning: "Extracts an archive with its folders intact" },
    { flag: "l out.7z", meaning: "Lists the contents without extracting" },
  ] },

  // Text editors & shell helpers
  nano: { level: "beginner", description: "A simple text editor that opens right in the terminal. Great for beginners.", flags: [
    { flag: "-l", meaning: "Shows line numbers" },
    { flag: "-i", meaning: "Auto-indents new lines" },
    { flag: "-w", meaning: "Does not wrap long lines" },
    { flag: "+10", meaning: "Opens the file at line 10" },
  ] },
  vim: { level: "advanced", description: "A powerful keyboard-driven text editor with a learning curve.", flags: [
    { flag: "+10", meaning: "Opens the file at line 10" },
    { flag: "-R", meaning: "Opens the file read-only" },
    { flag: "-u NONE", meaning: "Starts with no custom settings, useful for testing" },
  ] },
  vi: { level: "intermediate", description: "The original editor that vim is based on. Found on almost every system.", flags: [] },
  emacs: { level: "advanced", description: "A hugely extensible editor, almost an operating system of its own.", flags: [
    { flag: "-nw", meaning: "Runs inside the terminal without a window" },
    { flag: "-Q", meaning: "Starts with no custom settings" },
  ] },
  git: { level: "intermediate", description: "Tracks changes to your code and lets you share it with others.", flags: [
    { flag: "status", meaning: "Shows what changed in your project" },
    { flag: "clone URL", meaning: "Downloads a copy of a project" },
    { flag: "add .", meaning: "Stages all your changes for saving" },
    { flag: "commit -m \"msg\"", meaning: "Saves your changes with a message" },
    { flag: "push", meaning: "Sends your changes to the server" },
    { flag: "pull", meaning: "Fetches and merges changes from the server" },
    { flag: "log --oneline", meaning: "Shows a compact history of saved changes" },
  ] },
  screen: { level: "intermediate", description: "Keeps terminal sessions alive even if you disconnect.", flags: [
    { flag: "-S name", meaning: "Starts a named session" },
    { flag: "-r name", meaning: "Reattaches to a session" },
    { flag: "-ls", meaning: "Lists your running sessions" },
  ] },
  tmux: { level: "intermediate", description: "Splits your terminal into panes and keeps sessions alive.", flags: [
    { flag: "new -s name", meaning: "Starts a named session" },
    { flag: "attach -t name", meaning: "Rejoins a session" },
    { flag: "ls", meaning: "Lists your running sessions" },
    { flag: "kill-session -t name", meaning: "Ends a session" },
  ] },
  source: { level: "intermediate", description: "Runs a script inside your current shell, so its settings stick.", flags: [] },
  type: { level: "beginner", description: "Tells you whether a name is a command, alias or built-in.", flags: [
    { flag: "-a", meaning: "Shows all matches for the name" },
    { flag: "-t", meaning: "Shows just the kind: alias, file or builtin" },
  ] },
  help: { level: "beginner", description: "Shows help for the shell's built-in commands.", flags: [
    { flag: "cd", meaning: "Shows help for one built-in, like cd" },
  ] },
  whereis: { level: "beginner", description: "Finds where a program, its source and its manual page live.", flags: [
    { flag: "-b", meaning: "Finds only the program itself" },
  ] },
  compgen: { level: "advanced", description: "Lists all the commands you could type, used for auto-completion.", flags: [
    { flag: "-c", meaning: "Lists all commands" },
    { flag: "-a", meaning: "Lists all aliases" },
  ] },
  read: { level: "intermediate", description: "Waits for the user to type something and stores it in a variable.", flags: [
    { flag: "-p \"Name: \"", meaning: "Shows a prompt before reading" },
    { flag: "-s", meaning: "Hides what is typed, good for passwords" },
    { flag: "-t 10", meaning: "Gives up after 10 seconds" },
  ] },
  printf: { level: "intermediate", description: "Prints formatted text, more precise than echo.", flags: [
    { flag: "\"%s\\n\"", meaning: "Prints text followed by a new line" },
    { flag: "\"%05d\"", meaning: "Prints a number padded to 5 digits with zeros" },
  ] },
  test: { level: "intermediate", description: "Checks conditions in scripts, like whether a file exists.", flags: [
    { flag: "-f file", meaning: "True if the file exists" },
    { flag: "-d folder", meaning: "True if the folder exists" },
    { flag: "-z \"$var\"", meaning: "True if the variable is empty" },
  ] },
  expr: { level: "intermediate", description: "Does simple maths and string operations in old scripts.", flags: [] },
  bc: { level: "beginner", description: "A calculator for the terminal that handles decimals.", flags: [
    { flag: "-l", meaning: "Loads the maths library for functions like sine" },
    { flag: "-q", meaning: "Starts quietly without the welcome banner" },
  ] },
  seq: { level: "beginner", description: "Prints a sequence of numbers, like 1 to 10.", flags: [
    { flag: "1 10", meaning: "Prints 1 through 10" },
    { flag: "1 2 10", meaning: "Counts in steps of 2: 1, 3, 5, 7, 9" },
    { flag: "-s, ", meaning: "Separates the numbers with commas" },
  ] },
  shuf: { level: "beginner", description: "Shuffles lines randomly, or picks random items.", flags: [
    { flag: "-n 1", meaning: "Picks just one random line" },
    { flag: "-i 1-100", meaning: "Picks random numbers between 1 and 100" },
  ] },
  base64: { level: "intermediate", description: "Encodes or decodes text as base64, used for data in emails and APIs.", flags: [
    { flag: "-d", meaning: "Decodes instead of encodes" },
    { flag: "-w 0", meaning: "Prints one long line without wrapping" },
  ] },
  md5sum: { level: "intermediate", description: "Calculates the MD5 fingerprint of a file, to check it didn't change.", flags: [
    { flag: "-c", meaning: "Checks files against a saved list of fingerprints" },
  ] },
  sha256sum: { level: "intermediate", description: "Calculates the stronger SHA-256 fingerprint of a file.", flags: [
    { flag: "-c", meaning: "Verifies files against a checksum file" },
  ] },
  openssl: { level: "advanced", description: "Encrypts data and works with certificates from the terminal.", flags: [
    { flag: "rand 16", meaning: "Generates 16 random bytes" },
    { flag: "s_client -connect site:443", meaning: "Tests a site's TLS certificate" },
    { flag: "enc -aes-256-cbc -in file", meaning: "Encrypts a file with a password" },
  ] },
  chroot: { level: "advanced", description: "Runs a command with a different folder pretending to be the root.", flags: [] },
  nohup: { level: "intermediate", description: "Keeps a program running even after you log out.", flags: [
    { flag: "cmd &", meaning: "Runs the command in the background, immune to hangup" },
  ] },
  at: { level: "intermediate", description: "Schedules a one-off command to run at a specific time.", flags: [
    { flag: "now + 1 hour", meaning: "Runs the command one hour from now" },
    { flag: "-l", meaning: "Lists your scheduled jobs" },
  ] },
  batch: { level: "advanced", description: "Runs a command later, when the system is not busy.", flags: [] },
  wait: { level: "intermediate", description: "Pauses the script until background tasks have finished.", flags: [] },
  timeout: { level: "intermediate", description: "Runs a command but stops it if it takes too long.", flags: [
    { flag: "10s cmd", meaning: "Kills the command after 10 seconds" },
    { flag: "-k 5s 30s cmd", meaning: "Force-kills 5 seconds after the polite stop fails" },
  ] },
  logger: { level: "advanced", description: "Writes your own message into the system log.", flags: [
    { flag: "-t myapp", meaning: "Tags the message with a name" },
    { flag: "-p user.err", meaning: "Logs the message as an error" },
  ] },
  blkid: { level: "advanced", description: "Shows the UUIDs and filesystem types of your disks.", flags: [
    { flag: "-o value", meaning: "Prints just the values, easy to use in scripts" },
  ] },
  swapon: { level: "advanced", description: "Turns on a swap file or partition for extra memory.", flags: [
    { flag: "-s", meaning: "Shows a summary of active swap" },
    { flag: "-a", meaning: "Turns on all swap listed in the system config" },
  ] },
  swapoff: { level: "advanced", description: "Turns off a swap file or partition.", flags: [
    { flag: "-a", meaning: "Turns off all swap" },
  ] },
  vmstat: { level: "advanced", description: "Reports on memory, processes and CPU activity.", flags: [
    { flag: "2", meaning: "Refreshes every 2 seconds" },
    { flag: "-s", meaning: "Shows a table of totals since boot" },
  ] },
  iostat: { level: "advanced", description: "Shows how busy your disks are.", flags: [
    { flag: "-x 2", meaning: "Extended stats, refreshing every 2 seconds" },
    { flag: "-h", meaning: "Human-friendly sizes" },
  ] },
  mpstat: { level: "advanced", description: "Shows CPU usage for each processor core.", flags: [
    { flag: "-P ALL", meaning: "Shows every core" },
    { flag: "2 5", meaning: "Refreshes every 2 seconds, 5 times" },
  ] },
  sar: { level: "advanced", description: "Collects and reports system activity over time.", flags: [
    { flag: "-u 2 5", meaning: "CPU usage every 2 seconds, 5 times" },
    { flag: "-r", meaning: "Shows memory usage" },
  ] },
  finger: { level: "beginner", description: "Shows information about a user, like login time. Old-school.", flags: [] },
  write: { level: "intermediate", description: "Sends a message to another logged-in user's terminal.", flags: [] },
  wall: { level: "intermediate", description: "Broadcasts a message to every logged-in user's terminal.", flags: [] },
  mesg: { level: "intermediate", description: "Controls whether other users can send messages to your terminal.", flags: [
    { flag: "n", meaning: "Blocks messages" },
    { flag: "y", meaning: "Allows messages" },
  ] },
  talk: { level: "intermediate", description: "Opens a two-way chat with another user on the system.", flags: [] },
  banner: { level: "beginner", description: "Prints a big ASCII-art banner of your text.", flags: [] },
  figlet: { level: "beginner", description: "Turns your text into large decorative ASCII letters.", flags: [
    { flag: "-f slant", meaning: "Uses the slanted font" },
    { flag: "-c", meaning: "Centres the text" },
  ] },
  cowsay: { level: "beginner", description: "Makes a cow say your text in a speech bubble. Just for fun.", flags: [
    { flag: "-f tux", meaning: "Uses Tux the penguin instead of the cow" },
    { flag: "-l", meaning: "Lists all the available characters" },
  ] },
  fortune: { level: "beginner", description: "Prints a random quote or joke.", flags: [
    { flag: "-s", meaning: "Prints only short quotes" },
  ] },
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
