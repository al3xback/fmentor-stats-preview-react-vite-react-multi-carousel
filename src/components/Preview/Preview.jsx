import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meetingImg from '../../assets/meeting.jpg';
import styles from './Preview.module.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Preview() {
	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<Carousel
					infinite
					showDots
					draggable={false}
					responsive={responsive}
				>
					<img src={meetingImg} alt="People at a meeting" />
					<img src={meetingImg} alt="People at a meeting" />
					<img src={meetingImg} alt="People at a meeting" />
				</Carousel>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					Get <mark>insights</mark> that help your business grow.
				</h2>
				<p className={styles.desc}>
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<ul className={styles.statuses}>
					<li>
						<span className={styles.num}>10K+</span>
						<span className={styles.label}>Companies</span>
					</li>
					<li>
						<span className={styles.num}>314</span>
						<span className={styles.label}>Templates</span>
					</li>
					<li>
						<span className={styles.num}>12M+</span>
						<span className={styles.label}>Queries</span>
					</li>
				</ul>
			</div>
		</article>
	);
}
