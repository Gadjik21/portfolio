'use strict';

	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabs-content'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
            
            tabsContent.forEach(item => {
                item.classList.add('fade');
                item.classList.remove('show');
            });
        
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        
        function showTabContent(i) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('fade');
            tabs[i].classList.add('tabheader__item_active');
        }
        
        hideTabContent();
        showTabContent(0);
        
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

		
	

	