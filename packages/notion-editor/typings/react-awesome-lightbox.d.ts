declare module "react-awesome-lightbox" {
  export interface LightboxProps {
    image: string;
    title: string;
    onClose?: (e: Event) => void;
  }

  const Lightbox: React.FC<LightboxProps>;
  export default Lightbox;
}
