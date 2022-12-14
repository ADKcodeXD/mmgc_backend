module.exports = {
	disableEmoji: false,
	format: '{type}{scope}: {emoji} {subject}',
	list: ['test', 'feat', 'fix', 'config', 'docs', 'refactor', 'style', 'perf', 'add'],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
	scopes: [],
	types: {
		config: {
			description: 'éç½®ä¿®æ¹',
			emoji: 'ð§',
			value: 'config'
		},
		docs: {
			description: 'ææ¡£æ´æ°',
			emoji: 'âï¸',
			value: 'docs'
		},
		feat: {
			description: 'æ°åè½',
			emoji: 'ð',
			value: 'feat'
		},
		add: {
			description: 'å¢å æ°æ¨¡å æ°ä»£ç  åç§å¶ä»',
			emoji: 'â­',
			value: 'add'
		},
		fix: {
			description: 'ä¿®å¤bug',
			emoji: 'ð',
			value: 'fix'
		},
		perf: {
			description: 'æ§è½ä¼å ',
			emoji: 'â¡ï¸',
			value: 'perf'
		},
		refactor: {
			description: 'éæä»£ç æèæ¹åä»£ç ç»æ',
			emoji: 'ð¡',
			value: 'refactor'
		},
		release: {
			description: 'åå¸ç',
			emoji: 'ð¹',
			value: 'release'
		},
		style: {
			description: 'ä»£ç è§è ä»£ç æ ¼å¼ä¿®æ¹ ',
			emoji: 'â¨',
			value: 'style'
		},
		test: {
			description: 'ååæµè¯ ',
			emoji: 'ð',
			value: 'test'
		},
		messages: {
			type: "Select the type of change that you're committing:",
			customScope: 'Select the scope this component affects:',
			subject: 'Write a short, imperative mood description of the change:\n',
			body: 'æä¾ä¸ä¸ªé¿æè¿°æ¥è¯´æä½ æ´æ¹äºä»ä¹:\n ',
			footer: 'å³èissue e.g #123:',
			confirmCommit: 'æ¯å¦æç¸å³èçåä¼è¢«å½±å\n'
		}
	}
}
