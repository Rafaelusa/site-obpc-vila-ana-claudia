const mapContainer = document.querySelector('.map-container');

const iframe = document.createElement('iframe');

// URL base do Google Maps com o embed
const baseUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8059870358464!2d-46.44697255739234!3d-23.561764328244884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5918856ad475%3A0xead1301d5e780d5a!2sIgreja%20O%20Brasil%20Para%20Cristo%20Vila%20Ana%20Cl%C3%A1udia!5e0!3m2!1spt-BR!2sus!4v1623131258398!5m2!1spt-BR!2sus';

// Substituir o parâmetro de zoom diretamente na URL existente
const zoomLevel = '50'; // Defina o nível de zoom desejado
const newBaseUrl = baseUrl.replace('!4f13.1', `!4f13.1!15z${zoomLevel}`); // Ajuste do zoom

// Atualiza a URL do iframe com o nível de zoom
iframe.src = newBaseUrl;

iframe.allowFullscreen = true;
iframe.loading = 'lazy';

mapContainer.appendChild(iframe);

