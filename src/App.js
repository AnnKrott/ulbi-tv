import React, { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/Modal/MyModal';
import MyBtn from './components/UI/Button/MyBtn';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import MyLoader from './components/UI/Loader/MyLoader';
import { useFetching } from './hooks/useFetching';
import { getPagesCount } from './utils/pages';
import MyPagination from './components/UI/Pagination/MyPagination';

function App() {

	//states
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit] = useState(10);
	const [page, setPage] = useState(1);

	//server
	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit));
	})

	useEffect(() => {
		fetchPosts(limit, page);
		console.log('fetch posts');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	//pagination]


	const changePage = (page) => {
		fetchPosts(limit, page);
		setPage(page);
	}

	//build functions
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	//jsx
	return (
		<div className="App">

			<MyBtn style={{ marginTop: '30px' }} onClick={() => setModal(true)}	>
				Create Post
			</MyBtn>

			<PostFilter filter={filter} setFilter={setFilter} />

			<MyModal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</MyModal>

			{/* <hr style={{ margin: '15px 0' }} /> */}

			{postError &&
				<h3 style={{ textAlign: 'center', color: 'teal', marginTop: '15px' }}>{postError}</h3>
			}

			{isPostLoading
				? <div style={{ display: 'flex', justifyContent: 'center' }} >
					<MyLoader />
				</div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of Posts' />
			}


			<MyPagination totalPages={totalPages} page={page} changePage={changePage} />


		</div >
	);
}

export default App;
