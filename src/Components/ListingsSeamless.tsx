import React from "react";
import ImgPlaceholder from "./ListingImagePlaceholder";

interface listingsSeamlessProps {
  id: string;
  title: string;
}

const ListingsSeamless: React.FC<listingsSeamlessProps> = (props: listingsSeamlessProps) => {
  const { id, title } = props
  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm" id={`#${id}`}>
      <h6 className="border-bottom border-gray pb-2 mb-0">{title}</h6>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#007bff" />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Suggested Listing Title</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, utfermentum massa justo sit amet risus.</span>
        </div>
      </div>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#007bff" />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Suggested Listing Title</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, utfermentum massa justo sit amet risus.</span>
        </div>
      </div>
      <div className="media text-muted pt-3">
        <ImgPlaceholder colorHex="#007bff" />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Suggested Listing Title</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, utfermentum massa justo sit amet risus.</span>
        </div>
      </div>
      <small className="d-block text-right mt-3">
        <a href="/">All suggestions</a>
      </small>
    </div>
  );
};

export default ListingsSeamless;
