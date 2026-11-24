export type ContactDetails = { name:string; email:string; subject:string; message:string };

export function buildContactEmail(details:ContactDetails, language:'en'|'es') {
  // Keep user text in the body; strip line breaks from the subject header.
  const subject = details.subject.replace(/[\r\n]+/g,' ').trim() || (language==='es' ? 'Contacto desde luisgil.org' : 'Contact from luisgil.org');
  const nameLabel = language==='es' ? 'Nombre' : 'Name';
  const body = `${nameLabel}: ${details.name.trim()}\nEmail: ${details.email.trim()}\n\n${details.message.trim()}`;
  return `mailto:luis.gil.dev15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
