package com.cdac.daoimpl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.DietplanService;
import com.cdac.dao.DietplanDao;
import com.cdac.pojos.Dietplan;
import com.cdac.dao.*;

@Transactional
@Service
public class DietplanServiceImpl implements DietplanService  {

	@Autowired 
	private DietplanDao  dietplanDao;
	
	@Override
	public Dietplan findById(int planid) {
		Optional<Dietplan> b = dietplanDao.findById(planid);
		return b.orElse(null);
	}

	@Override
	public List<Dietplan> findAll() {
		return dietplanDao.findAll();
	}

	@Override
	public Dietplan save(Dietplan dp) {
		return dietplanDao.save(dp);
		
	}

	@Override
	public Dietplan update(Dietplan dp) {
		return dietplanDao.save(dp);
	}

	@Override
	public void deleteById(int planid) {
		dietplanDao.deleteById(planid);

	}
	
}	
