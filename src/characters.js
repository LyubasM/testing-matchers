export default function charactersList(args) {
    return args.sort((a, b) => parseFloat(b.health) - parseFloat(a.health))
};
