import React from 'react'

const Navlink = () => {
    const linkHref = this.props.linkHref;
    const linkName = this.props.linkName;
    return (
        <a href={linkHref}>
            {linkName}
        </a>
    )
}

export default Navlink
