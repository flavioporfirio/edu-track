export default function sendEmail(student) {
  if (student.faltas.length > 7) {
    fetch(`https://edutrack-server-v2es.onrender.com/${student.email}`, {
      mode: "no-cors",
    });
  }
}
