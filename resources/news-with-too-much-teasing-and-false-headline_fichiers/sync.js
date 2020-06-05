(function(){function insert_pixel(url, attemptID){
		var check = function() {
			if (document.body) {
				var img = document.createElement("img");
				img.setAttribute("style", "position:absolute;opacity:0;width:1px;height:1px;display:block;");
				img.src = url;
				img.setAttribute("class", "ayl_sync_pixel ayl-injected-element");
				img.addEventListener("load", function(){
					const element = getElement(attemptID);
					element.removeChild(img);
				});

				const element = getElement(attemptID);
				element.appendChild(img);

			} else {
				setTimeout(check, 200);
			}
		}
		var getElement = function(attemptID) {
			if(attemptID) {
				const element = document.getElementById('ayl_' + attemptID);
				if (element) {
					return element;
				}
				const elementAuto = document.getElementById('ayl_i_' + attemptID);
				if(elementAuto) {
					return elementAuto;
				}
			}
			return document.body;
		}
		check();
	}
	insert_pixel("https://secure.adnxs.com/getuid?https%3A%2F%2Fvisitor.omnitagjs.com%2Fvisitor%2Fsync%3Fname%3DAPPNEXUS%26uid%3D48d5713d5c563cba2049f505b2d944b6%26visitor%3D%24UID", "");insert_pixel("https://x.bidswitch.net/sync?ssp=adyoulike", "");insert_pixel("https://match.adsrvr.org/track/cmf/generic?ttd_pid=k2j3gqp&ttd_tpi=1", "");insert_pixel("//b1sync.zemanta.com/usersync/adyoulike/?cb=https%3A%2F%2Fvisitor.omnitagjs.com%2Fvisitor%2Fsync%3Fname%3DZEMANTA%26uid%3D37fd16ff67c6752f0061cbdf26c68702%26visitor%3D__ZUID__", "");insert_pixel("https://px.powerlinks.com/user/sync/ssps?userId=2fbde5a656516e420cd2a64811486e22&sourceId=4cb810ae-5cab-4ea2-aa3d-d948f2703fa7", "");insert_pixel("//sync-ayl.adotmob.com/cookie/adyoulike?r=https%3A%2F%2Fvisitor.omnitagjs.com%2Fvisitor%2Fsync%3Fname%3DADOTMOB%26uid%3Db989ee06df7dfc250798f7f0dfc4ddee%26visitor%3D%7Bamob_user_id%7D", "");insert_pixel("https://sync.srv.stackadapt.com/sync?nid=33", "");insert_pixel("https://sync.zebestof.com/sync/53", "");insert_pixel("//www.storygize.net/ccm/e7663ab8-4f01-4938-85f4-28333a6bed34", "");insert_pixel("https://px.adhigh.net/p/cm/adyoulike", "");insert_pixel("https://bttrack.com/pixel/cookiesync?source=6b2595d5-cf4e-4298-a4ac-bcc34433eaad&secure=1", "");insert_pixel("https://contextual.media.net/cksync.php?cs=3&type=ayl&ovsid=2fbde5a656516e420cd2a64811486e22", "");insert_pixel("https://matching.ivitrack.com/sync?realm=ayl&uid=2fbde5a656516e420cd2a64811486e22", "");})()