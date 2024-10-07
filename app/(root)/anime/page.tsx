'use client';

import { AnimeCardWithDescription, AnimeSort } from '@/src/components/shared';
import { Clock, Flame, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export default function AnimePage() {
	const [activeSorting, setActiveSorting] = useState('list');

	return (
		<>
			<div className='flex flex-col gap-8 mb-6'>
				<div className='flex items-center justify-between mt-28 max-sm:mt-36 text-clamp-2xl'>
					{activeSorting === 'grip' ? (
						<div className='flex items-center gap-2 select-none'>
							<h1 className='font-bold text-titanium-200'>
								Лучшие
							</h1>
							<Flame className='size-7 text-orange-400 drop-shadow-[0_1px_7px_rgba(249,115,22,0.95)]' />
						</div>
					) : activeSorting === 'grid' ? (
						<div className='flex items-center gap-2 select-none'>
							<h1 className='font-bold text-titanium-200'>
								Новинки
							</h1>
							<Clock className='size-6 text-emerald-500 drop-shadow-[0_1px_7px_rgba(16,185,129,0.95)]' />
						</div>
					) : (
						<div className='flex items-center gap-2 select-none'>
							<h1 className='font-bold text-titanium-200'>
								Список аниме
							</h1>
							<Sparkles className='size-6 text-primary-400 drop-shadow-[0_1px_7px_rgba(116,89,255,0.95)]' />
						</div>
					)}
					<AnimeSort
						activeSorting={activeSorting}
						setActiveSorting={setActiveSorting}
					/>
				</div>
				<div
					className={`flex flex-col justify-center items-center ${
						activeSorting === 'grip'
							? 'grid grid-cols-4 max-md:grid-cols-2 gap-6'
							: activeSorting === 'grid'
							? 'grid grid-cols-2 max-md:grid-cols-1 gap-6'
							: 'gap-9'
					}`}>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={0}
						nameRu='Наруто'
						name='Naruto'
						year={2002}
						description='Существует мир, что никак не схож с нашим, современным и
					развивающимся. Этот мир – далекий от стереотипа, что
					привыкли лицезреть каждый день, когда встаем на тягостную
					работу или же на учебу. В данном "неизведанном"
					для нас обществе, что развивается странным...'
						genres='Сёнэн, Приключения'
						imageUrl='https://staticg.sportskeeda.com/editor/2021/09/f9e1a-16318345240877.png'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/20/16c8836b613b3131abd017c8be84b23c.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={1}
						nameRu='Блич'
						name='Bleach'
						year={2004}
						description='События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/ViqhW50jnMQ/maxresdefault.jpg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={2}
						nameRu='Тетрадь Смерти'
						name='Death Note'
						year={2006}
						description='Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, учеба идет как нельзя лучше, а дома царит мир. Но все меняется, когда в его руки попадает...'
						genres='Психологическое, Триллер'
						imageUrl='https://tr.rbxcdn.com/6be369028f39a5a0c8d9ef1313f75a67/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={3}
						nameRu='Ван-Пис'
						name='One Piece'
						year={1999}
						description='Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком....'
						genres='Сёнэн, Приключения'
						imageUrl='https://tr.rbxcdn.com/4a1065e19fb92bd8600b060a6d08237e/500/280/Image/Jpeg'
						imageUrlList='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={4}
						nameRu='Магическая битва'
						name='Jujutsu Kaisen'
						year={2020}
						description='Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром...'
						genres='Сёнэн, Фэнтези'
						imageUrl='https://i.ytimg.com/vi/bHOpKlTTKBg/maxresdefault.jpg'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/40748/af4f2db18f17de4d7c6491f6f92cd9d9.jpeg'
						activeSorting={activeSorting}
					/>
					<AnimeCardWithDescription
						id={5}
						nameRu='Токийский гуль'
						name='Tokyo Ghoul'
						year={2014}
						description='История данного сериала пойдет про гулей и борьбу с ними. Гуль – это некое животное, которое питается людьми, и сейчас все Токио просто кишит ними. Главный герой данного сериала случайным образом становится гулем, его жажда с каждым днем становится всё...'
						genres='Сэйнэн, Триллер'
						imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846f9eb6-171c-4bb4-89ae-9b1bbb09db4b/ddl7oxh-c9a4c317-77f5-4c96-aaad-85054bca923d.png/v1/fill/w_1192,h_670,q_70,strp/tokyo_ghoul_by_jjo3y_ddl7oxh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzg0NmY5ZWI2LTE3MWMtNGJiNC04OWFlLTliMWJiYjA5ZGI0YlwvZGRsN294aC1jOWE0YzMxNy03N2Y1LTRjOTYtYWFhZC04NTA1NGJjYTkyM2QucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sJI-dBaKPX-i0TVoAIvkYntOnPyv14Yqr5gX_SuKgmU'
						imageUrlList='https://nyaa.shikimori.one/uploads/poster/animes/22319/aaafa174782625b56cabfec0067da13b.jpeg'
						activeSorting={activeSorting}
					/>
				</div>
			</div>
		</>
	);
}
