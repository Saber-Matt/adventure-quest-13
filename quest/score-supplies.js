function scoreSupplies(supplies) {
    if (supplies === 0) {
        return 'poor';
    }
    else if (supplies < 50) {
        return 'modest';
    }
    return 'rich';
}

export default scoreSupplies;