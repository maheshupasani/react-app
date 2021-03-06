import React, { Component } from 'react';
import constants from '../../Config/Constants';
import CommonService from '../../Services/Common/CommonService';

/* component */
import SliderComponent from './partials/SliderComponent';
import LeftSidebarComponent from './partials/LeftSidebarComponent';
import RightSidebarFeaturedComponent from './partials/RightSidebarFeaturedComponent';
import RightSidebarCategoryComponent from './partials/RightSidebarCategoryComponent';
import RightSidebarRecommendedComponent from './partials/RightSidebarRecommendedComponent';

console.log(CommonService)
// console.log(CommonService.axiosPost({url:'sdf/sdf'}));
export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <SliderComponent />
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3"> {/* Left Sidebar */}
                                <LeftSidebarComponent />
                            </div> {/* /Left Sidebar */}
                            
                            <div class="col-sm-9 padding-right"> {/* Right Sidebar */}
                                <RightSidebarFeaturedComponent />
                                
                                <RightSidebarCategoryComponent />
                                
                                <RightSidebarRecommendedComponent />                                
                            </div> {/* /Right Sidebar */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
