import { UseGuards, Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/database/schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { Comment } from 'src/database/schemas/comment.schema';

@Controller('comment')
@ApiTags('댓글 API')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':eventId')
  @ApiOperation({ summary: '행사 모든 댓글 가져오기' })
  @ApiCreatedResponse({ description: '행사 모든 댓글', type: Comment })
  async getPostsComments(@Param('eventId') eventId: string) {
    return await this.commentService.getPostsComments(eventId);
  }

  @Post(':eventId')
  @ApiOperation({ summary: '행사 댓글 달기' })
  @ApiCreatedResponse({ description: '행사 댓글 추가', type: Comment })
  @UseGuards(AuthGuard('jwt'))
  async addComment(
    @Param('eventId') eventId: string,
    @CurUser() user: User,
    @Body('commentBody') commentBody: string,
  ) {
    return await this.commentService.addComments(eventId, user, commentBody);
  }
}
