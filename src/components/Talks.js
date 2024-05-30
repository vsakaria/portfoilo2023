import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';

const Talks = () => {
	return (
		<SectionContainer name={'talks'}>
			<div className="container">
				<div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
					<div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
						<div className="title_flex w-full h-auto clear-both flex justify-between items-end">
							<SectionTitle
								pageName={'Talks'}
								title={'Recent Talk on Artificial Intelligence'}
							/>
						</div>
					</div>
					<div className="video-container">
						<iframe
							width="840"
							height="472.5"
							src="https://www.youtube.com/embed/cIk03Ji4zdM"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};
export default Talks;
