import React from "react";
import ImgPlaceholder from "./ListingImagePlaceholder";

interface listingsColoredProps {
  id: string;
  title: string;
}

const ListingsColored: React.FC<listingsColoredProps> = (props: listingsColoredProps) => {
  const { id, title } = props
  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm" id={`#${id}`}>
      <h6 className="border-bottom border-gray pb-2 mb-0">{title}</h6>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#007bff" />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">Listing Title</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus.
        </p>
      </div>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#e83e8c" />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">Listing Title</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus.
        </p>
      </div>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#6f42c1" />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">Listing Title</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus.
        </p>
      </div>
      <small className="d-block text-right mt-3">
        <a href="/">All updates</a>
      </small>
    </div>
  );
};

export default ListingsColored;
