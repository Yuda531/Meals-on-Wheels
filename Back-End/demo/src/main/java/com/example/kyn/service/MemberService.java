package com.example.kyn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kyn.model.Member;
import com.example.kyn.repository.MemberRepository;
import com.example.kyn.repository.UserRepository;

import java.util.List;

@Service
public class MemberService{

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public MemberService(MemberRepository memberRepository, UserRepository userRepository, UserService userService) {
		this.userRepository = userRepository;
		this.memberRepository = memberRepository;
	}
	public Member save(Member member) {
		return memberRepository.save(member);
	}

	public List<Member> findAllMember(){
		return memberRepository.findAll();
	}

	public void deleteMemberById(Long memberId){
		memberRepository.deleteById(memberId);
	}
	
	public Member findMemberByUserId(Long userId) {
		return memberRepository.getMemberByUserId(userId);
	}
}
