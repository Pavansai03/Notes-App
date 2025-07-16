import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./utilities.css";
import "./Pastes.css";
import { removeTopaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => {
    return state.paste.pastes;
  });
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => dispatch(removeTopaste(pasteId));

  return (
    <div>
      <div className="search flex jc al">
        <input
          type="search"
          placeholder="search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-container flex-c al">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div key={paste.id} className="card flex-c jc">
                {" "}
                {/* Make sure to add a key if possible */}
                <div className="p2">
                  <h2>{paste.title}</h2>
                </div>
                <div id="paste-content" className="m2 matter">{paste.value}</div>
                <div className="m2 matter">{paste.createdAt}</div>
                <div className="btns m2 flex space-even">
                  <button>
                    <Link className="link-btns" to={`/?pasteId=${paste?._id}`}>
                      Edit
                    </Link>
                  </button>
                  <button>
                    <Link className="link-btns" to={`/pastes/${paste?._id}`}>
                      View
                    </Link>
                  </button>
                  <button className="hover" onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button className="hover"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.value);
                      toast.success("copied successfully");
                    }}
                  >
                    Copy
                  </button>
                 
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
