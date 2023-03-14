/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import CommetCard from "./CommentCard";
import CommentsForm from "./CommentsForm";
import Pagination from "../../components/pagination";

const PageSize = 10;

const CommentsPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const getItems = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setItems(response.data);
    setCurrentPage(1);
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  useEffect(() => {
    getItems();
  }, []);

  const resetItem = () => {
    setItem({
      title: "",
    });
  };

  const create = (e) => {
    e.preventDefault();
    setLoading(true);
    if (item.name !== "" && item.email !== "" && item.body !== "") {
      fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setItems([...items, json]);
          resetItem();
          setLoading(false);
          setFormOpen(false);
        });
    } else {
      alert("please fill all the fields");
      setLoading(false);
    }
  };
  const deleteItem = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    });
    setItems([...items.filter((user) => user.id !== id)]);
  };
  const updateData = (e, id) => {
    e.preventDefault();
    setLoading(true);
    if (item.name !== "" && item.email !== "" && item.body !== "") {
      fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setItems([
            ...items.map((user) => {
              if (user.id === id) {
                return json;
              } else {
                return user;
              }
            }),
          ]);
          resetItem();
          setLoading(false);
          setFormOpen(false);
          setEditItem(false);
        });
    } else {
      alert("please fill all the fields");
      setLoading(false);
    }
  };
  return (
    <div className="comments">
      <h1 className="heading">Comments ({items.length})</h1>
      <div className="add-new-btn">
        <button
          onClick={() => {
            resetItem();
            setFormOpen(true);
          }}
        >
          Add
        </button>
      </div>
      {formOpen && (
        <CommentsForm
          loading={loading}
          item={item}
          setItem={setItem}
          create={create}
          updateData={updateData}
          editItem={editItem}
          setFormOpen={setFormOpen}
        />
      )}
      <div className="wrapper">
        {currentTableData.map((item) => (
          <CommetCard
            key={item?.id}
            item={item}
            setItem={setItem}
            setFormOpen={setFormOpen}
            setEditItem={setEditItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <div className="df jcc">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default CommentsPage;
