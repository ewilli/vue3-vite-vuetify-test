import webfontloader from 'webfontloader';

export async function loadFonts() {
  webfontloader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  });
}
