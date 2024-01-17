document.addEventListener('DOMContentLoaded', () => {
  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.addEventListener('click', () => {
      // Erstellen Sie eine E-Mail-Adresse
      const email = 'alexdurach@hotmail.de';

      window.location.href = `mailto:${  email}`;
    });
  }
});
