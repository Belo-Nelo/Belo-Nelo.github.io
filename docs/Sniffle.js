class Sniffle {
  getInfo() {
    return {
      id: 'Sniffle',
      name: 'Sniffle',
      blocks: [
        {
          opcode: 'locate',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  locate(args) {
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new Sniffle());
