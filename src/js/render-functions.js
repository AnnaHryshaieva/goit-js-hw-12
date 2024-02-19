function template(arr) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = arr;

  return `<li class="gallery-item">
  <a href="${largeImageURL}">
    <img src="${webformatURL}" class="gallery-image" alt="${tags}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${likes}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${views}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${downloads}
    </p>
  </div>
</li>`;
}

export function templateGalleries(array) {
  return array.map(template).join('');
}
