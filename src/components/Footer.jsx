export default function Footer() {
  return (
    <footer>
     	<div className="row">

     		<div className="col-four tab-full pull-right social">

     			<ul className="footer-social">        
			      	<li>
						<a href="https://www.linkedin.com/in/roopesh-makwana-831530186" target="_blank">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
            		<li>
						<a href="#" target="_blank">
							<i className="fa fa-github"></i>
						</a>
					</li>
			   </ul> 
	      		
	      </div>

      	<div className="col-eight tab-full">
	      	<div className="copyright">
		        	<span>© Copyright 2025  </span>
              <a>All Rights Reserved</a> 
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
		      </div>
      	</div>     	
   </footer>
  );
}