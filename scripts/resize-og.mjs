import sharp from 'sharp';

const SOURCE_IMAGE = 'public/images/og-default.jpg';  // Using existing image as source

// Resize OG image
sharp(SOURCE_IMAGE)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .toFile('public/images/og-default-resized.jpg')
  .then(info => { console.log('OG image resized:', info); })
  .catch(err => { console.error('Error resizing OG image:', err); });

// Create favicons
const sizes = [16, 32, 180, 192, 512];

sizes.forEach(size => {
  sharp(SOURCE_IMAGE)
    .resize(size, size, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(`public/favicon-${size}x${size}.png`)
    .then(info => { console.log(`Favicon ${size}x${size} created:`, info); })
    .catch(err => { console.error(`Error creating favicon ${size}x${size}:`, err); });
}); 