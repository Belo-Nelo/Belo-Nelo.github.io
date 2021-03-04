class ScratchStats {
    constructor() {}
    
    getInfo() {
        return {
            id: 'ScratchStats',
            name: 'ScratchStats',,

            color1: '#8BC34A',
            color2: '#7CB342',
            color3: '#689F38',
            
            blocks: [
                {
                    opcode: 'projectstats',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'project: [PROJECTID] stats: [STATS]',
                    arguments: {
                        PROJECTID: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'put a project id here, just make sure its shared'
                        }

                        STATS: {
                            type: Scratch.ArgumentType.STRING
                            menu: 'stats',
                            defaultValue: 'Views',
                        }
                    }
                    
                    menus: {
                        stats: {
                                items: ['Views', 'Loves', 'Favorites'],
                        }

                    }
                },
            ]
      
        }
    }
    projectstats([PROJECTID], [STATS]) {
        return poo poo bum;
    }
};
Scratch.extensions.register(new ScratchStats());