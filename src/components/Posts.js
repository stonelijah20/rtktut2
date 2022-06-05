import React, {useEffect} from 'react'
import {getPosts} from '../features/postSlice'
import {useDispatch, useSelector} from 'react-redux'

function Posts() {
    const dispatch = useDispatch()
    const {list} = useSelector(store => store.posts)
    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])

  return (
    <div>
      <h1>Posts!</h1>
      <div>
        {list.map((ele) => {
          return (
            <div>
              <h1>
                {ele.title}
              </h1>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default Posts