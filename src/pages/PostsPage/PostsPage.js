<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import PostForm from "./Components/PostForm/PostForm";
import PostCard from "./Components/PostCard/PostCard";
import Pagination from "../../components/pagination";
import './PostsPage.scss'

const PageSize = 10;

const PostsPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const getItems = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
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

  const create = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (item.name !== "" && item.email !== "" && item.body !== "") {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
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
  const deleteItem = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setItems([...items.filter((user) => user.id !== id)]);
  };
  const updateData = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    if (item.name !== "" && item.email !== "" && item.body !== "") {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
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
    <div className="posts">
      <h1 className="heading">Posts ({items.length})</h1>
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
        <PostForm
          loading={loading}
          item={item}
          setItem={setItem}
          create={create}
          updateData={updateData}
          editItem={editItem}
          setFormOpen={setFormOpen}
        />
      )}
      <div className="posts-wrapper">
        {currentTableData.map((item) => (
          <PostCard
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

export default PostsPage;
=======
import React from 'react'

const PostsPage = () => {
  return (
    <div>PostsPage</div>
  )
}

export default PostsPage
>>>>>>> 802865f6da552a5dfab6a9fc37739949a420196b
