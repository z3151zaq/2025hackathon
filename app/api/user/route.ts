import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

// 新增用户
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing name or email' }, { status: 400 })
    }

    const user = await prisma.user.create({
      data: { name, email },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('POST error:', error)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}

// 更新用户
export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, name, email } = body

    if (!id) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 })
    }

    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('PUT error:', error)
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

// 删除用户
export async function DELETE(req: Request) {
  try {
    const body = await req.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 })
    }

    await prisma.user.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}