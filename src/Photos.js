import React from "react";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row mt-3">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid rounded mb-3"
                    src={photo.src.landscape}
                    alt="discribing"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
