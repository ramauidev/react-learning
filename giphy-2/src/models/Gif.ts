interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  title: string;
  url: string;
  images: Images;
  id: string;
}
