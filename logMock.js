(function() {
	if(!window.Mock)
		window.Mock = {};
		
	var mock = window.Mock;
	
	// define log mock
	mock.logMock = function() {
		this.nCall = 0;
	};
	
	mock.logMock.prototype = {
		getLog: function() {
			var logs = [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ullamcorper nulla, eu varius diam vulputate nec. In eu magna vitae ex auctor aliquam. Nam a vulputate erat. Aliquam eu ante ut mi luctus laoreet nec at orci. Donec sed viverra tortor. In hac habitasse platea dictumst. Vivamus tincidunt in mi non suscipit. Vestibulum arcu libero, pellentesque id tortor ut, facilisis fermentum libero. Sed faucibus odio sed enim fermentum, vitae vehicula nulla scelerisque. Nunc eu nulla leo. Proin at libero facilisis, fermentum tortor a, semper odio. Praesent lacinia odio tortor, et aliquet nisl pulvinar non. Duis cursus varius nisi, vel ullamcorper velit. Mauris ultrices pretium suscipit. Vivamus efficitur purus in urna finibus, eu elementum lacus commodo.",
				"Ut in pharetra mi. Quisque quam turpis, molestie sit amet tempor eu, hendrerit a metus. In vel pulvinar nisi, et pretium justo. Nulla rhoncus nulla sed dolor finibus, a ultricies eros mattis. Nulla facilisi. Curabitur a nisl augue. Integer sed diam non nisl blandit tincidunt. In hac habitasse platea dictumst. Ut a maximus augue. Maecenas nec ornare urna, faucibus aliquet sapien. Ut nec vestibulum mauris. Mauris sit amet lacus non ante laoreet commodo sit amet a ante. Quisque in massa suscipit, imperdiet elit at, auctor lorem. Nam malesuada dolor tempor, efficitur tellus vel, commodo lectus.",
				"Sed consectetur risus vitae dignissim efficitur. Vivamus sollicitudin risus molestie dui sagittis, id faucibus tellus suscipit. Aliquam quis nisl eros. Nullam id dignissim mi. Aenean et nunc mi. Quisque tincidunt sit amet augue in cursus. In fermentum, ante ac ultrices blandit, ex tellus bibendum arcu, eu tempus neque massa vitae erat. Vestibulum vehicula posuere nisi id rutrum. Quisque lacinia ex sit amet sem fringilla vulputate. Maecenas laoreet lectus eu diam rutrum imperdiet.",
				"Nunc leo odio, hendrerit eu nulla a, pretium pellentesque odio. Donec pretium dictum sem in sollicitudin. Donec fringilla orci et quam aliquet consequat. Mauris quis mi id magna placerat consequat. Suspendisse convallis arcu et arcu sagittis vestibulum. Donec bibendum justo sit amet ultrices tincidunt. Morbi vel dui in diam pharetra mattis sit amet quis purus. Mauris finibus, arcu a ultricies scelerisque, lacus diam congue metus, sit amet feugiat dui justo non libero. Cras at eros a enim suscipit efficitur. Donec vulputate quam at ultricies euismod. Vestibulum eleifend dolor eget erat mattis, ac porttitor est blandit. Nunc id blandit orci. Donec placerat urna dolor, non aliquet dolor vulputate eu.",
				"Nulla at porta diam. Mauris sit amet risus tempor, imperdiet mi vel, vehicula diam. Nulla et purus magna. Nam ac enim eu ante aliquet semper ut ac enim. Pellentesque et ullamcorper dui. Pellentesque maximus venenatis sapien nec aliquam. Curabitur velit tellus, tristique ac orci eu, ultrices auctor augue. Integer ornare nibh fringilla erat sagittis euismod sit amet ut diam. Vestibulum laoreet massa at sem ornare aliquet. Integer hendrerit libero quis erat pretium accumsan. Praesent egestas tristique est, a consectetur arcu ultrices a. Sed aliquet enim vitae dapibus pulvinar. Quisque pharetra metus id congue egestas. Aenean placerat non arcu sed commodo. Sed id sem sem.",
				"Duis lobortis libero tincidunt luctus gravida. Aliquam consequat lobortis fringilla. Vivamus at nisi vel dolor vehicula vestibulum a eu nisi. Proin pretium vestibulum lorem molestie egestas. Sed facilisis libero finibus nisi mattis, in tincidunt quam blandit. Praesent condimentum commodo sapien ac consectetur. Suspendisse id vestibulum justo. Nam dictum magna sit amet nisi ultrices faucibus. Aliquam erat volutpat. Curabitur condimentum imperdiet vulputate. Duis a purus sem. Nullam convallis porttitor suscipit. Nam tincidunt sem vel mi venenatis dictum. Quisque sed mollis dolor. Curabitur luctus orci leo, vel venenatis libero malesuada quis.",
				"Interdum et malesuada fames ac ante ipsum primis in faucibus. In at orci blandit, tincidunt ipsum vitae, convallis mi. Aenean tempor sem quis felis efficitur, ac euismod ligula scelerisque. Duis quis urna diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed laoreet tellus, id dapibus mauris. Nulla iaculis convallis lacus ac pretium. Vivamus quis eros ac nisl tincidunt volutpat. Vivamus id porta metus, vitae blandit ex. Pellentesque odio nibh, consequat a volutpat quis, lacinia et orci. Ut convallis erat at tincidunt vestibulum. Vivamus tristique, lorem ut auctor tempus, ipsum mauris feugiat urna, vitae tempor velit tortor sed ante. Fusce vel ligula mattis, ultrices est ac, sagittis sem. Suspendisse iaculis sapien magna, et hendrerit sapien egestas nec. Nunc quis mi nec est bibendum convallis in eget est.",
				"Praesent elementum tempus augue, ut eleifend libero malesuada ut. Sed gravida non est vitae interdum. Suspendisse nec quam rhoncus, aliquet neque gravida, suscipit eros. Cras ornare vel leo vel semper. Donec porttitor euismod rhoncus. Cras at placerat odio. Duis nibh arcu, pharetra placerat interdum vel, imperdiet at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis dui laoreet dolor porta dictum. Ut aliquam ex quis ante tincidunt, eu vulputate neque ultricies. Praesent in orci quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt, quam sit amet accumsan pretium, purus dolor faucibus est, eget ultricies eros risus quis nibh.",
				"Sed ultricies vel velit nec accumsan. Pellentesque id varius nisi. Vestibulum vulputate, odio vel sollicitudin aliquam, ipsum tellus pretium tellus, aliquam suscipit leo sapien quis magna. In feugiat congue augue eget interdum. Phasellus et quam nec risus pretium vulputate vitae vehicula orci. Nulla facilisi. Aliquam ut dolor accumsan, tincidunt nulla ac, porta erat. Cras eleifend justo eu nisi tincidunt, ac aliquam augue viverra. Nunc in turpis nec quam posuere ornare vel a mi. Mauris non risus venenatis, facilisis mauris nec, sollicitudin velit. Fusce mollis ante blandit, scelerisque ante at, efficitur purus. Morbi feugiat interdum urna, vel suscipit felis egestas eu. In nibh odio, volutpat ac lorem id, tempus elementum sem.",
				"Duis vel egestas ligula. Etiam imperdiet placerat elit, eu venenatis elit faucibus non. Donec mattis non magna eget suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas pellentesque sapien ullamcorper justo congue, eget maximus velit tempor. Nullam lobortis tempor gravida. Aenean lacinia facilisis bibendum. Suspendisse cursus quam nunc, non sodales nisi vulputate eget. Praesent sollicitudin molestie purus in pellentesque. Pellentesque viverra augue lobortis accumsan vestibulum. Nulla quis tellus libero.",
				"Suspendisse neque sapien, egestas eu magna et, cursus volutpat enim. Maecenas vehicula congue dapibus. Sed vel rutrum nulla. Vivamus a ex nec felis interdum viverra ornare et ligula. Aenean fermentum libero sit amet nisl viverra mollis. Donec dui dolor, euismod quis magna vitae, ultricies suscipit risus. Donec ipsum nulla, tempus eu iaculis eu, ultrices et odio. Curabitur sit amet elementum mi, id rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum bibendum, leo vitae viverra consequat, mauris neque ultrices ligula, in euismod mi lacus eget justo. In vel nibh vitae leo rutrum vestibulum. Donec ut maximus urna, sit amet aliquet eros.",
				"Nam facilisis vel neque aliquam ultrices. Etiam vitae iaculis neque. Vestibulum sodales quam in dapibus scelerisque. In malesuada urna eu leo placerat, id fringilla est feugiat. Suspendisse interdum tincidunt dui, eu semper justo finibus sit amet. Aenean diam sapien, laoreet eu augue a, porttitor euismod massa. Morbi nisi dolor, tempor vitae leo sed, imperdiet pretium odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vulputate ligula ex. Phasellus non odio erat.",
				"Sed velit sem, volutpat sed efficitur eu, euismod ac lorem. Etiam porta pulvinar mauris. Donec quis enim finibus mi bibendum mattis non ac lacus. Donec elementum finibus velit ac fringilla. Phasellus volutpat faucibus vehicula. Quisque sit amet lacus vitae quam dictum laoreet. Nam at lacinia mauris, varius rhoncus leo. Nulla arcu leo, dictum ac faucibus eu, hendrerit non arcu. Etiam at tortor sed ligula tristique viverra.",
				"Praesent ex nisl, aliquet eget eros sed, hendrerit pharetra odio. Etiam quis est auctor, vehicula metus a, vestibulum augue. Fusce vitae lobortis urna. Maecenas facilisis urna sed vestibulum volutpat. Ut sodales tortor ac velit euismod interdum. Fusce sed vulputate odio, eu tristique tellus. Curabitur pretium enim a diam viverra pretium. Vestibulum id neque est. Nulla et auctor leo. Sed et finibus magna, scelerisque volutpat mauris. Vestibulum varius, massa et congue pharetra, dui lacus consectetur erat, auctor ultricies lorem dolor quis lorem. Nullam ac nisi sed lacus ultrices lobortis in sed ipsum. Quisque ac ultricies sapien. Donec consequat sed quam ac tristique. In eu libero in libero vulputate auctor non sed neque. Proin dapibus posuere aliquet.",
				"Curabitur quis urna in risus eleifend pellentesque. Vivamus sollicitudin nisl maximus dictum iaculis. Sed aliquam faucibus aliquet. Donec ultrices, odio eu tristique tempus, mauris tellus convallis neque, vel hendrerit est erat vel lorem. Nunc ut eros urna. Curabitur a lorem quis nibh dictum aliquet sed nec neque. Morbi lectus erat, ullamcorper eu sagittis viverra, fermentum eget eros. Nunc mattis nulla et nisl sodales ornare. Donec sed nibh tortor. Cras condimentum nibh vitae justo lacinia gravida.",
				"Proin eu tincidunt erat. Phasellus convallis eu nunc eget laoreet. Vivamus ut nisi diam. Maecenas interdum euismod odio quis porttitor. Sed ullamcorper magna in lacus vulputate tincidunt. In nisi felis, suscipit ut euismod vitae, ornare quis ligula. Pellentesque eu lobortis urna, ac porta dui. Sed eget tortor urna. Mauris a tortor blandit augue sollicitudin consectetur ut eget odio. Vestibulum at posuere nisl, a imperdiet lorem. Morbi et dignissim felis, eget laoreet ipsum. Proin eget ornare arcu. Maecenas eget efficitur orci, vitae blandit sapien. Maecenas non venenatis lorem.",
				"Etiam a gravida diam, sed scelerisque turpis. In sit amet urna id leo laoreet laoreet sit amet in massa. Duis nec sem enim. Pellentesque imperdiet purus non ipsum rhoncus, sed commodo ex egestas. Phasellus quis mi vehicula, venenatis dui id, volutpat erat. Praesent maximus, ligula vitae condimentum gravida, nunc metus ornare eros, et dapibus libero urna quis est. Morbi interdum ex sem. Aliquam id augue arcu.",
				"Donec sed ex tempus, placerat ex id, egestas dui. Fusce elit sem, tempor et finibus eu, euismod vitae enim. Mauris ultricies tortor vel mi feugiat, vitae accumsan metus semper. Etiam id augue feugiat ipsum ornare sodales vel sit amet elit. Vestibulum rutrum mollis ex at placerat. Suspendisse congue nibh nibh, eu lacinia nunc tempor at. Quisque iaculis lorem nulla, id sodales risus lacinia id. Duis tincidunt vehicula lectus vitae pharetra. Maecenas tristique nisi et tortor molestie finibus. Ut rhoncus justo non libero iaculis sagittis eu id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vitae ligula quam. Suspendisse nec ipsum nec ligula fringilla volutpat. Suspendisse potenti.",
				"Donec elit lorem, viverra vel enim non, fermentum elementum elit. Proin pellentesque sapien sed neque dictum, fringilla ultrices tellus convallis. Mauris sit amet erat massa. Duis consectetur pharetra lacus, non rhoncus elit commodo suscipit. Cras a libero in odio egestas ultricies et a erat. Ut ut tellus vel orci ultrices pulvinar. Phasellus dictum, metus vel imperdiet semper, enim lacus mattis turpis, non pellentesque diam erat ac lectus. Sed a velit at sem vestibulum molestie. Morbi nec nunc in libero lobortis tincidunt. Curabitur gravida, diam non ullamcorper sodales, velit lacus maximus dui, eu faucibus diam felis nec urna. Morbi est orci, pulvinar tincidunt risus suscipit, auctor viverra massa. In nec scelerisque dolor. Nam congue mauris sit amet arcu sollicitudin, et lacinia nisi finibus. Nulla interdum tortor ac mi auctor fermentum. Curabitur efficitur mauris augue, vel gravida lorem tincidunt a.",
				"Phasellus quis ex tristique, congue lectus vitae, bibendum tellus. In laoreet lectus eget neque sodales pharetra. Nullam accumsan sollicitudin sapien eu consectetur. Donec ut sagittis urna. Cras convallis consequat fringilla. Duis condimentum eu ipsum et maximus. Fusce vitae odio eu mi ullamcorper blandit vel nec purus. Cras faucibus laoreet malesuada. Pellentesque venenatis lacus quis enim rutrum porttitor. Praesent ultrices iaculis rhoncus. Mauris ac ultrices purus. Nam non vehicula eros."
			];
			
			this.nCall = ++this.nCall % logs.length;
			
			var date = new Date();
			var sDate = '[' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ']';
			
			return sDate + ' ' + logs[this.nCall].replace(/\.\s?/g, '\.\n') + '\n';
		}
	}
	
	
	
})(window);