export default{
	//暂时只支持多久以前的格式
	formatDuration(oldDateString, newDateString){
		let oldDate = new Date(oldDateString),
				newDate = newDateString ? new Date(newDateString) : new Date(),
				duration = newDate - oldDate;

		let seconds	= Math.floor(duration / 1000),
				minutes = Math.floor(seconds / 60) ,
				hours = Math.floor(seconds / 60 / 60),
				days = Math.floor(seconds / 60 / 60 / 24),
				months = Math.floor(seconds / 60 / 60 / 24 / 30),
				years = Math.floor(seconds / 60 / 60 / 24 / 365);
	
		if(years > 0) return years + '年前';
		if(months > 0) return months + '个月前';
		if(days > 0) return days + '天前';
		if(hours > 0) return  hours + '小时前';
		if(minutes > 0) return  minutes + '分前';		
	}

}