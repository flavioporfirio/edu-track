export default function sendEmail(student) {
  if (student.faltas.length > 7) {
    fetch(`https://edu-track-email.onrender.com/${student.email}`, {
      mode: "no-cors",
    });
  }
}
