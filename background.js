// listen for our browerAction to be clicked

chrome.tabs.onUpdated.addListener(function (tab, changeInfo) {
	// for the current tab, inject the "inject.js" file & execute it
  if (changeInfo.status == 'loading') {
    chrome.tabs.executeScript(tab.ib, {
  		file: 'inject.js'
  	});
  }
});
