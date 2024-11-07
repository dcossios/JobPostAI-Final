// Función para mostrar la previsualización según la red social seleccionada
function showPreview(platform) {
    const previewContainer = document.getElementById('preview-container');
    let content = '';

    switch (platform) {
        case 'instagram':
            content = `
                <h2>Previsualización de Instagram</h2>
                <div class="instagram-preview">
                    <div class="border rounded shadow p-3">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex align-items-center">
                                <i class="fa-brands fa-instagram me-2"></i>
                                <div>
                                    <strong>Instagram</strong><br>
                                    <span>Magneto</span>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div class="poster-dynamic-content">
                            ${posterHtml}
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <i class="fa-regular fa-heart me-3"></i>
                                <i class="fa-regular fa-comment me-3"></i>
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                        <div class="mt-3">
                            <p>Liked by <strong>Magneto</strong>, <strong>HTML5</strong>, <strong>Web</strong> and
                                <strong>100,000 others</strong>
                            </p>
                            <p>${jobDescription}</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button class="btn btn-primary mx-2" onclick="publicarEnInstagram()">Publicar en Instagram</button>
                </div>
            `;
            break;

        case 'facebook':
            content = `
                <h2>Previsualización de Facebook</h2>
                <div class="facebook-preview">
                    <div class="border rounded shadow p-3">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex align-items-center">
                                <img src=${imageUrl} class="rounded-circle me-2" width="40" height="40">
                                <div>
                                    <strong><a href="#">Magneto</a></strong><br>
                                    <small id="current-date"></small>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div class="poster-dynamic-content">
                            ${posterHtml}
                        </div>
                        <div class="mt-3">
                            <p class="mb-1">${jobDescription}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <span class="text-muted"><a href="#">193K</a> reactions</span>
                            <span class="text-muted"><a href="#">50K Comments</a> · <a href="#">5.4K Shares</a></span>
                        </div>
                        <div class="d-flex justify-content-around mt-2">
                            <button class="btn btn-light w-100 me-2"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                            <button class="btn btn-light w-100 me-2"><i class="fa-regular fa-comment"></i> Comment</button>
                            <button class="btn btn-light w-100"><i class="fa-solid fa-share"></i> Share</button>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button class="btn btn-primary mx-2" onclick="publicarEnFacebook()">Publicar en Facebook</button>
                </div>
            `;
            break;

        case 'whatsapp':
            content = `
                <h2>Previsualización de WhatsApp</h2>
                <div class="whatsapp-preview">
                    <p>Así se vería tu post en WhatsApp.</p>
                    <div class="border rounded shadow p-3">
                        <p>${jobDescription}</p>
                        <img src="${imageUrl}" alt="Imagen del Post" class="img-fluid">
                    </div>
                </div>
            `;
            break;

        case 'gmail':
            content = `
                <h2>Previsualización de Gmail</h2>
                <div class="gmail-preview">
                    <p>Así se vería tu post en un correo de Gmail.</p>
                    <div class="border rounded shadow p-3">
                        <p>Asunto: Nueva oportunidad de trabajo</p>
                        <p>${jobDescription}</p>
                        <img src="${imageUrl}" alt="Imagen del Post" class="img-fluid">
                    </div>
                </div>
            `;
            break;

        default:
            content = `<p>Selecciona una red social para ver la previsualización.</p>`;
    }

    previewContainer.innerHTML = content;

    if (platform === 'facebook') {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const today = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = today.toLocaleDateString('es-ES', options);
        }
    }
}
