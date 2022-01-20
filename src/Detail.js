import React, { useEffect } from 'react';
import './Detail.scss';
import $ from "jquery";

class Detail extends React.Component {

    
    componentDidMount() {
    $(document).ready(function() {
        $('.has-animation').each(function(index) {
            $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
            });
        });
        });
  }
  render(){
    return (
      <div>
        <div>
            <div className="has-animation animation-ltr" data-delay="10">
            <p className="bigger">Reveal Animation </p>
        </div>

        <div className="has-animation animation-rtl" data-delay="1000">
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="has-animation animation-ltr" data-delay="1500">
            <p class="text txt-center">V2 <a href="http://codepen.io/antho-fsy/pen/gWjJBQ">here</a> 
            Scroll Reveal Animation 
            </p>
        </div>
        <div className="has-animation animation-rtl" data-delay="2000">
            <img src="https://images.prismic.io/figaroimmo/943be1d1-6e3a-4c59-a5f1-97ce8b6ea147_lyon-confinement.jpg?auto=compress,format&rect=0,0,1000,667&w=720&h=480" width="600" />
        </div>

        <div className="has-animation animation-ltr" data-delay="4000">
            <p className="bigger">END ☺</p>
        </div>
        </div>
      </div> 

      
    );
  }
}

export default Detail;