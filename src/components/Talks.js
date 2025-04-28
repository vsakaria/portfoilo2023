import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';

const Talks = () => {
	return (
		<SectionContainer name={'talks'}>
			<div className="container">
				<div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
					<div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px] mt-[300px]">
						<div className="title_flex w-full h-auto clear-both flex justify-between items-end">
							<SectionTitle
								pageName={'Talks'}
								title={'Recent Talk on Artificial Intelligence'}
							/>
						</div>
					</div>

					
							
					<div className="video-container mb-[62px]">
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

					<div className="tokyo_tm_title w-full h-auto clear-both float-left mt-[300px] mb-[62px]">
						<div className="title_flex w-full h-auto clear-both flex justify-between items-end">
							<SectionTitle
								pageName={'Talks'}
								title={'A playlist of examples of training and demoing, click on YouTube the icon to view the playlist'}
							/>
						</div>
					</div>

					<iframe width="840" height="472.5" src="https://www.youtube.com/embed/videoseries?si=Ysklz2HKPHjrk8J4&amp;list=PLotJoO1xG1VyhADicIv5UoaCRBAeRy4U1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>				</div>
			</div>
		</SectionContainer>
	);
};
export default Talks;
