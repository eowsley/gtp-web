import React from 'react';
import './WorkingWithUs.css'

function WorkingWithUs(props) {
    return (
			<div className='workingwithus__container'>
				<div className='workingwithus__heroimg'></div>

				<div className='workingwithus__text1'>
					<h2 className='workingwithus__h2'>Working With Us </h2>
					<p className='workingwithus__p'>
						We have a team of product management, UI/UX design, project
						management, software development, quality assurance and site
						reliability professionals that will partner with you in:{' '}
					</p>
					<ul className='workingwithus__ul'></ul>
					<li className='workingwithus__li'>
						Product specification and UI/UX design
					</li>
					<li className='workingwithus__li'>
						Development of software per your specification
					</li>
					<li className='workingwithus__li'>Quality assurance</li>
					<li className='workingwithus__li'>
						Database, cloud hosting and management
					</li>
					<li className='workingwithus__li'>
						On-going project management process
					</li>
					<li className='workingwithus__li'>
						Set-up of a turn-key analytics package
					</li>
				</div>

				<div className='workingwithus__imgcarousel'> img carousel </div>

				<div className='workingwithus__model1'>
					<h3 className='workingwithus__h3'>We offer 3 models:</h3>
					<ul>
						<li>
							<span className='workingwithus__spanbold'>
								Full end-to-end product outsourcing:
							</span>
							We will assign a full product POD that includes a Product Manager,
							UI/UX designer, a Software Development/QA/SRE Team, and a Project
							Manager that will specify, design, build and deliver the product
							based on your business needs. This is most suitable for startup
							founders that have a concept and need to build prototypes or v1 to
							raise the next round.
						</li>
					</ul>
				</div>
				<div className='workingwithus__model2'>
					<ul>
						<li>
							<span className='workingwithus__spanbold'>
								Software project outsourcing:
							</span>
							We can build the whole project for you while partnering with you
							based on your requirements and designs. We will ensure that will
							stay in close sync by providing updates every sprint. This is most
							suitable for a company that has an existing product on web and
							needs to build a mobile version (or vice-versa), or has a fully
							specified project that can’t wait for their current team to free
							up time to do.
						</li>
					</ul>
				</div>
				<div className='workingwithus__model3'>
					<ul>
						<li>
							<span className='workingwithus__spanbold'>
								Team augmentation:
							</span>
							We can augment your staff by assigning full-time and part-time
							highly trained professionals for frontend development, backend
							development, quality assurance, database engineers, and site
							reliability engineers. They will attend your team meetings and
							work on tasks that you assign them. This is most suitable for
							established companies with existing processes and management
							structure.
						</li>
					</ul>
				</div>
			</div>
		);
}

export default WorkingWithUs;