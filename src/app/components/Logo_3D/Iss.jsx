import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/issLogo/iss-transformed.glb')
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y +=0.003 // Increase the rotation speed here
  })

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0.31, -2.5, 0]} scale={[0.14, 1, 0.14]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[-0.31, 2.5, 0]} rotation={[0, 0, Math.PI]} scale={[0.14, 1, 0.14]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} position={[0.71, -2.5, 0]} scale={[0.06, 1, 0.14]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.003']} position={[-0.21, 0.73, 0]} scale={[0.06, 1, 0.14]} />
    </group>
  )
}

useGLTF.preload('/iss-transformed.glb')