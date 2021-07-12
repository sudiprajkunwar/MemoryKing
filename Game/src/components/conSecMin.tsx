export default function conSecMin(sec: number) {
  if (sec == null) return "00:00";
  let minutes = Math.floor(sec / 60); // get minutes
  let seconds = Math.floor(sec - minutes * 60); // get seconds

  let printOut = "";

  if (minutes < 10) printOut = printOut + "0" + minutes.toString();
  else printOut = printOut + minutes.toString();
  printOut += " : ";
  if (seconds < 10) printOut = printOut + "0" + seconds.toString();
  else printOut = printOut + seconds.toString();

  return printOut;
}
