import React, { Component } from 'react';


class Toggler extends Component {

    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    render() {
        const C = this.props.component

        //add obj destructuring as we don not need to include component and default value to pass to component 
        const { component: Component, defaultOnValue, ...props } = this.props
        return ( <
            Component on = { this.state.on }
            toggle = { this.toggle } {...props }
            />
        )
    }
}


export default function withToggler(component, obj) {
    return function(props) {
        return ( < Toggler component = { component }
            defaultOnValue = { obj.defaultOnValue } {...props }
            /> )
        }
    }