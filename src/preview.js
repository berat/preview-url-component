import React from "react";
import Axios from "axios";

import "../preview.css";

const APIURL = "https://getopengraph.herokuapp.com/";
const REGEX = new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$"
);

function Preview({ url, loadingText, notFound }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    url && url.match(REGEX) !== null && getData(url);
  }, [url]);

  const getData = async (url) => {
    setLoading(true);
    let response = await Axios.get(`${APIURL}?url=${url}`, {
      method: "GET",
    });
    setData(response.data);
    setLoading(false);
  };

  return loading === false ? (
    data.status === 200 ? (
      <div className="preview">
        {data.img ? (
          <img src={data.img} alt={data.title} />
        ) : (
          <div className="defaultImg">nothing</div>
        )}
        <div className="previewRight">
          <h3>{data.title}</h3>
          <p>
            {data.desc && data.desc.length > 150
              ? data.desc.slice(0, 150)
              : data.desc}
          </p>
          <i>{data.url.length > 90 ? data.url.slice(0, 90) : data.url}</i>
        </div>
      </div>
    ) : (
      <div className="previewNothing">
        {notFound ? notFound : "NOT FOUND! Check to URL"}
      </div>
    )
  ) : loading === true ? (
    <div className="previewLoading">
      {loadingText ? loadingText : "loading..."}
    </div>
  ) : null;
}

export default Preview;
